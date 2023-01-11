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
exports.EndpointBatchItem = void 0;
var utils_1 = require("../../../internal/utils");
var channeltypeenum_1 = require("./channeltypeenum");
var endpointdemographic_1 = require("./endpointdemographic");
var endpointlocation_1 = require("./endpointlocation");
var endpointuser_1 = require("./endpointuser");
// EndpointBatchItem
/**
 * Specifies an endpoint to create or update and the settings and attributes to set or change for the endpoint.
**/
var EndpointBatchItem = /** @class */ (function (_super) {
    __extends(EndpointBatchItem, _super);
    function EndpointBatchItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Address" }),
        __metadata("design:type", String)
    ], EndpointBatchItem.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Attributes" }),
        __metadata("design:type", Object)
    ], EndpointBatchItem.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ChannelType" }),
        __metadata("design:type", String)
    ], EndpointBatchItem.prototype, "channelType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Demographic" }),
        __metadata("design:type", endpointdemographic_1.EndpointDemographic)
    ], EndpointBatchItem.prototype, "demographic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EffectiveDate" }),
        __metadata("design:type", String)
    ], EndpointBatchItem.prototype, "effectiveDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EndpointStatus" }),
        __metadata("design:type", String)
    ], EndpointBatchItem.prototype, "endpointStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], EndpointBatchItem.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Location" }),
        __metadata("design:type", endpointlocation_1.EndpointLocation)
    ], EndpointBatchItem.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Metrics" }),
        __metadata("design:type", Object)
    ], EndpointBatchItem.prototype, "metrics", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=OptOut" }),
        __metadata("design:type", String)
    ], EndpointBatchItem.prototype, "optOut", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=RequestId" }),
        __metadata("design:type", String)
    ], EndpointBatchItem.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=User" }),
        __metadata("design:type", endpointuser_1.EndpointUser)
    ], EndpointBatchItem.prototype, "user", void 0);
    return EndpointBatchItem;
}(utils_1.SpeakeasyBase));
exports.EndpointBatchItem = EndpointBatchItem;
