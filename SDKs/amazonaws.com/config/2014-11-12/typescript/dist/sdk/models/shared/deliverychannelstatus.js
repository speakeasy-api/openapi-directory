"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryChannelStatus = void 0;
var utils_1 = require("../../../internal/utils");
var configexportdeliveryinfo_1 = require("./configexportdeliveryinfo");
var configstreamdeliveryinfo_1 = require("./configstreamdeliveryinfo");
// DeliveryChannelStatus
/**
 * <p>The status of a specified delivery channel.</p> <p>Valid values: <code>Success</code> | <code>Failure</code> </p>
**/
var DeliveryChannelStatus = /** @class */ (function (_super) {
    __extends(DeliveryChannelStatus, _super);
    function DeliveryChannelStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=configHistoryDeliveryInfo" }),
        __metadata("design:type", configexportdeliveryinfo_1.ConfigExportDeliveryInfo)
    ], DeliveryChannelStatus.prototype, "configHistoryDeliveryInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=configSnapshotDeliveryInfo" }),
        __metadata("design:type", configexportdeliveryinfo_1.ConfigExportDeliveryInfo)
    ], DeliveryChannelStatus.prototype, "configSnapshotDeliveryInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=configStreamDeliveryInfo" }),
        __metadata("design:type", configstreamdeliveryinfo_1.ConfigStreamDeliveryInfo)
    ], DeliveryChannelStatus.prototype, "configStreamDeliveryInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DeliveryChannelStatus.prototype, "name", void 0);
    return DeliveryChannelStatus;
}(utils_1.SpeakeasyBase));
exports.DeliveryChannelStatus = DeliveryChannelStatus;
