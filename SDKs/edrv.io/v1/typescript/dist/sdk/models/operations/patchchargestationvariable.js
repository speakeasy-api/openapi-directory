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
exports.PatchChargeStationVariableResponse = exports.PatchChargeStationVariableRequest = exports.PatchChargeStationVariable201ApplicationJson = exports.PatchChargeStationVariableRequestBody = exports.PatchChargeStationVariableRequestBodyVariableEnum = exports.PatchChargeStationVariablePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var PatchChargeStationVariablePathParams = /** @class */ (function (_super) {
    __extends(PatchChargeStationVariablePathParams, _super);
    function PatchChargeStationVariablePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PatchChargeStationVariablePathParams.prototype, "id", void 0);
    return PatchChargeStationVariablePathParams;
}(utils_1.SpeakeasyBase));
exports.PatchChargeStationVariablePathParams = PatchChargeStationVariablePathParams;
var PatchChargeStationVariableRequestBodyVariableEnum;
(function (PatchChargeStationVariableRequestBodyVariableEnum) {
    PatchChargeStationVariableRequestBodyVariableEnum["MeterValueSampleInterval"] = "MeterValueSampleInterval";
    PatchChargeStationVariableRequestBodyVariableEnum["HeartbeatInterval"] = "HeartbeatInterval";
    PatchChargeStationVariableRequestBodyVariableEnum["ConnectionTimeOut"] = "ConnectionTimeOut";
    PatchChargeStationVariableRequestBodyVariableEnum["WebSocketPingInterval"] = "WebSocketPingInterval";
    PatchChargeStationVariableRequestBodyVariableEnum["TransactionMessageRetryInterval"] = "TransactionMessageRetryInterval";
    PatchChargeStationVariableRequestBodyVariableEnum["TransactionMessageAttempts"] = "TransactionMessageAttempts";
})(PatchChargeStationVariableRequestBodyVariableEnum = exports.PatchChargeStationVariableRequestBodyVariableEnum || (exports.PatchChargeStationVariableRequestBodyVariableEnum = {}));
var PatchChargeStationVariableRequestBody = /** @class */ (function (_super) {
    __extends(PatchChargeStationVariableRequestBody, _super);
    function PatchChargeStationVariableRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], PatchChargeStationVariableRequestBody.prototype, "value", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=variable" }),
        __metadata("design:type", String)
    ], PatchChargeStationVariableRequestBody.prototype, "variable", void 0);
    return PatchChargeStationVariableRequestBody;
}(utils_1.SpeakeasyBase));
exports.PatchChargeStationVariableRequestBody = PatchChargeStationVariableRequestBody;
var PatchChargeStationVariable201ApplicationJson = /** @class */ (function (_super) {
    __extends(PatchChargeStationVariable201ApplicationJson, _super);
    function PatchChargeStationVariable201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PatchChargeStationVariable201ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ok" }),
        __metadata("design:type", Boolean)
    ], PatchChargeStationVariable201ApplicationJson.prototype, "ok", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", Object)
    ], PatchChargeStationVariable201ApplicationJson.prototype, "result", void 0);
    return PatchChargeStationVariable201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.PatchChargeStationVariable201ApplicationJson = PatchChargeStationVariable201ApplicationJson;
var PatchChargeStationVariableRequest = /** @class */ (function (_super) {
    __extends(PatchChargeStationVariableRequest, _super);
    function PatchChargeStationVariableRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchChargeStationVariablePathParams)
    ], PatchChargeStationVariableRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PatchChargeStationVariableRequestBody)
    ], PatchChargeStationVariableRequest.prototype, "request", void 0);
    return PatchChargeStationVariableRequest;
}(utils_1.SpeakeasyBase));
exports.PatchChargeStationVariableRequest = PatchChargeStationVariableRequest;
var PatchChargeStationVariableResponse = /** @class */ (function (_super) {
    __extends(PatchChargeStationVariableResponse, _super);
    function PatchChargeStationVariableResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatchChargeStationVariableResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatchChargeStationVariableResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PatchChargeStationVariable201ApplicationJson)
    ], PatchChargeStationVariableResponse.prototype, "patchChargeStationVariable201ApplicationJSONObject", void 0);
    return PatchChargeStationVariableResponse;
}(utils_1.SpeakeasyBase));
exports.PatchChargeStationVariableResponse = PatchChargeStationVariableResponse;
