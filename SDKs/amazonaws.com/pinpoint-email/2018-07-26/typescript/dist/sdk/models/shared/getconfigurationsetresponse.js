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
exports.GetConfigurationSetResponse = void 0;
var utils_1 = require("../../../internal/utils");
var deliveryoptions_1 = require("./deliveryoptions");
var reputationoptions_1 = require("./reputationoptions");
var sendingoptions_1 = require("./sendingoptions");
var tag_1 = require("./tag");
var trackingoptions_1 = require("./trackingoptions");
// GetConfigurationSetResponse
/**
 * Information about a configuration set.
**/
var GetConfigurationSetResponse = /** @class */ (function (_super) {
    __extends(GetConfigurationSetResponse, _super);
    function GetConfigurationSetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ConfigurationSetName" }),
        __metadata("design:type", String)
    ], GetConfigurationSetResponse.prototype, "configurationSetName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=DeliveryOptions" }),
        __metadata("design:type", deliveryoptions_1.DeliveryOptions)
    ], GetConfigurationSetResponse.prototype, "deliveryOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ReputationOptions" }),
        __metadata("design:type", reputationoptions_1.ReputationOptions)
    ], GetConfigurationSetResponse.prototype, "reputationOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=SendingOptions" }),
        __metadata("design:type", sendingoptions_1.SendingOptions)
    ], GetConfigurationSetResponse.prototype, "sendingOptions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Tags", elemType: tag_1.Tag }),
        __metadata("design:type", Array)
    ], GetConfigurationSetResponse.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TrackingOptions" }),
        __metadata("design:type", trackingoptions_1.TrackingOptions)
    ], GetConfigurationSetResponse.prototype, "trackingOptions", void 0);
    return GetConfigurationSetResponse;
}(utils_1.SpeakeasyBase));
exports.GetConfigurationSetResponse = GetConfigurationSetResponse;
