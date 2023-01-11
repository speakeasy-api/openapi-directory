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
exports.DeviceDetailsInput = exports.DeviceDetailsOutput = exports.DeviceDetailsPushStateEnum = exports.DeviceDetailsPlatformEnum = exports.DeviceDetailsFormFactorEnum = void 0;
var utils_1 = require("../../../internal/utils");
var recipient_1 = require("./recipient");
var recipient_2 = require("./recipient");
var DeviceDetailsFormFactorEnum;
(function (DeviceDetailsFormFactorEnum) {
    DeviceDetailsFormFactorEnum["Phone"] = "phone";
    DeviceDetailsFormFactorEnum["Tablet"] = "tablet";
    DeviceDetailsFormFactorEnum["Desktop"] = "desktop";
    DeviceDetailsFormFactorEnum["Tv"] = "tv";
    DeviceDetailsFormFactorEnum["Watch"] = "watch";
    DeviceDetailsFormFactorEnum["Car"] = "car";
    DeviceDetailsFormFactorEnum["Embedded"] = "embedded";
})(DeviceDetailsFormFactorEnum = exports.DeviceDetailsFormFactorEnum || (exports.DeviceDetailsFormFactorEnum = {}));
var DeviceDetailsPlatformEnum;
(function (DeviceDetailsPlatformEnum) {
    DeviceDetailsPlatformEnum["Ios"] = "ios";
    DeviceDetailsPlatformEnum["Android"] = "android";
})(DeviceDetailsPlatformEnum = exports.DeviceDetailsPlatformEnum || (exports.DeviceDetailsPlatformEnum = {}));
var DeviceDetailsPushStateEnum;
(function (DeviceDetailsPushStateEnum) {
    DeviceDetailsPushStateEnum["Active"] = "Active";
    DeviceDetailsPushStateEnum["Failing"] = "Failing";
    DeviceDetailsPushStateEnum["Failed"] = "Failed";
})(DeviceDetailsPushStateEnum = exports.DeviceDetailsPushStateEnum || (exports.DeviceDetailsPushStateEnum = {}));
var DeviceDetailsOutput = /** @class */ (function (_super) {
    __extends(DeviceDetailsOutput, _super);
    function DeviceDetailsOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientId" }),
        __metadata("design:type", String)
    ], DeviceDetailsOutput.prototype, "clientId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deviceSecret" }),
        __metadata("design:type", String)
    ], DeviceDetailsOutput.prototype, "deviceSecret", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=formFactor" }),
        __metadata("design:type", String)
    ], DeviceDetailsOutput.prototype, "formFactor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DeviceDetailsOutput.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata" }),
        __metadata("design:type", Object)
    ], DeviceDetailsOutput.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=platform" }),
        __metadata("design:type", String)
    ], DeviceDetailsOutput.prototype, "platform", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=push.recipient" }),
        __metadata("design:type", recipient_1.RecipientOutput)
    ], DeviceDetailsOutput.prototype, "pushRecipient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=push.state" }),
        __metadata("design:type", String)
    ], DeviceDetailsOutput.prototype, "pushState", void 0);
    return DeviceDetailsOutput;
}(utils_1.SpeakeasyBase));
exports.DeviceDetailsOutput = DeviceDetailsOutput;
var DeviceDetailsInput = /** @class */ (function (_super) {
    __extends(DeviceDetailsInput, _super);
    function DeviceDetailsInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientId, form, name=clientId;" }),
        __metadata("design:type", String)
    ], DeviceDetailsInput.prototype, "clientId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deviceSecret, form, name=deviceSecret;" }),
        __metadata("design:type", String)
    ], DeviceDetailsInput.prototype, "deviceSecret", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=formFactor, form, name=formFactor;" }),
        __metadata("design:type", String)
    ], DeviceDetailsInput.prototype, "formFactor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id, form, name=id;" }),
        __metadata("design:type", String)
    ], DeviceDetailsInput.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=metadata, form, name=metadata;json=true" }),
        __metadata("design:type", Object)
    ], DeviceDetailsInput.prototype, "metadata", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=platform, form, name=platform;" }),
        __metadata("design:type", String)
    ], DeviceDetailsInput.prototype, "platform", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=push.recipient, form, name=push.recipient;" }),
        __metadata("design:type", recipient_2.Recipient)
    ], DeviceDetailsInput.prototype, "pushRecipient", void 0);
    return DeviceDetailsInput;
}(utils_1.SpeakeasyBase));
exports.DeviceDetailsInput = DeviceDetailsInput;
