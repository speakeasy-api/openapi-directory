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
exports.PatchTokenResponse = exports.PatchTokenRequest = exports.PatchToken201ApplicationJson = exports.PatchTokenRequestBody = exports.PatchTokenRequestBodyChannelEnum = exports.PatchTokenPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PatchTokenPathParams = /** @class */ (function (_super) {
    __extends(PatchTokenPathParams, _super);
    function PatchTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PatchTokenPathParams.prototype, "id", void 0);
    return PatchTokenPathParams;
}(utils_1.SpeakeasyBase));
exports.PatchTokenPathParams = PatchTokenPathParams;
var PatchTokenRequestBodyChannelEnum;
(function (PatchTokenRequestBodyChannelEnum) {
    PatchTokenRequestBodyChannelEnum["Physical"] = "physical";
    PatchTokenRequestBodyChannelEnum["Slack"] = "slack";
    PatchTokenRequestBodyChannelEnum["Telegram"] = "telegram";
    PatchTokenRequestBodyChannelEnum["Sms"] = "sms";
})(PatchTokenRequestBodyChannelEnum = exports.PatchTokenRequestBodyChannelEnum || (exports.PatchTokenRequestBodyChannelEnum = {}));
var PatchTokenRequestBody = /** @class */ (function (_super) {
    __extends(PatchTokenRequestBody, _super);
    function PatchTokenRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], PatchTokenRequestBody.prototype, "active", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], PatchTokenRequestBody.prototype, "channel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=driver" }),
        __metadata("design:type", String)
    ], PatchTokenRequestBody.prototype, "driver", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=physicalId" }),
        __metadata("design:type", String)
    ], PatchTokenRequestBody.prototype, "physicalId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PatchTokenRequestBody.prototype, "type", void 0);
    return PatchTokenRequestBody;
}(utils_1.SpeakeasyBase));
exports.PatchTokenRequestBody = PatchTokenRequestBody;
var PatchToken201ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchToken201ApplicationJson, _super);
    function PatchToken201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PatchToken201ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ok" }),
        __metadata("design:type", Boolean)
    ], PatchToken201ApplicationJson.prototype, "ok", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", Array)
    ], PatchToken201ApplicationJson.prototype, "result", void 0);
    return PatchToken201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchToken201ApplicationJson = PatchToken201ApplicationJson;
var PatchTokenRequest = /** @class */ (function (_super) {
    __extends(PatchTokenRequest, _super);
    function PatchTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchTokenPathParams)
    ], PatchTokenRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PatchTokenRequestBody)
    ], PatchTokenRequest.prototype, "request", void 0);
    return PatchTokenRequest;
}(utils_1.SpeakeasyBase));
exports.PatchTokenRequest = PatchTokenRequest;
var PatchTokenResponse = /** @class */ (function (_super) {
    __extends(PatchTokenResponse, _super);
    function PatchTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatchTokenResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatchTokenResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchToken201ApplicationJson)
    ], PatchTokenResponse.prototype, "patchToken201ApplicationJSONObject", void 0);
    return PatchTokenResponse;
}(utils_1.SpeakeasyBase));
exports.PatchTokenResponse = PatchTokenResponse;
