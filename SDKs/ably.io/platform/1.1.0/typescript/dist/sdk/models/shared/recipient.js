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
exports.Recipient = exports.RecipientOutput = exports.RecipientTransportTypeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var RecipientTransportTypeEnum;
(function (RecipientTransportTypeEnum) {
    RecipientTransportTypeEnum["Apns"] = "apns";
    RecipientTransportTypeEnum["Fcm"] = "fcm";
    RecipientTransportTypeEnum["Gcm"] = "gcm";
})(RecipientTransportTypeEnum = exports.RecipientTransportTypeEnum || (exports.RecipientTransportTypeEnum = {}));
// RecipientOutput
/**
 * Push recipient details for a device.
**/
var RecipientOutput = /** @class */ (function (_super) {
    __extends(RecipientOutput, _super);
    function RecipientOutput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deviceToken" }),
        __metadata("design:type", String)
    ], RecipientOutput.prototype, "deviceToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrationToken" }),
        __metadata("design:type", String)
    ], RecipientOutput.prototype, "registrationToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transportType" }),
        __metadata("design:type", String)
    ], RecipientOutput.prototype, "transportType", void 0);
    return RecipientOutput;
}(utils_1.SpeakeasyBase));
exports.RecipientOutput = RecipientOutput;
// Recipient
/**
 * Push recipient details for a device.
**/
var Recipient = /** @class */ (function (_super) {
    __extends(Recipient, _super);
    function Recipient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=clientId, form, name=clientId;" }),
        __metadata("design:type", String)
    ], Recipient.prototype, "clientId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deviceId, form, name=deviceId;" }),
        __metadata("design:type", String)
    ], Recipient.prototype, "deviceId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=deviceToken, form, name=deviceToken;" }),
        __metadata("design:type", String)
    ], Recipient.prototype, "deviceToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registrationToken, form, name=registrationToken;" }),
        __metadata("design:type", String)
    ], Recipient.prototype, "registrationToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transportType, form, name=transportType;" }),
        __metadata("design:type", String)
    ], Recipient.prototype, "transportType", void 0);
    return Recipient;
}(utils_1.SpeakeasyBase));
exports.Recipient = Recipient;
