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
exports.CancelreservationResponse = exports.CancelreservationRequest = exports.Cancelreservation201ApplicationJson = exports.CancelreservationRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var CancelreservationRequestBody = /** @class */ (function (_super) {
    __extends(CancelreservationRequestBody, _super);
    function CancelreservationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reservation" }),
        __metadata("design:type", String)
    ], CancelreservationRequestBody.prototype, "reservation", void 0);
    return CancelreservationRequestBody;
}(utils_1.SpeakeasyBase));
exports.CancelreservationRequestBody = CancelreservationRequestBody;
var Cancelreservation201ApplicationJson = /** @class */ (function (_super) {
    __extends(Cancelreservation201ApplicationJson, _super);
    function Cancelreservation201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], Cancelreservation201ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ok" }),
        __metadata("design:type", Boolean)
    ], Cancelreservation201ApplicationJson.prototype, "ok", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=result" }),
        __metadata("design:type", Object)
    ], Cancelreservation201ApplicationJson.prototype, "result", void 0);
    return Cancelreservation201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Cancelreservation201ApplicationJson = Cancelreservation201ApplicationJson;
var CancelreservationRequest = /** @class */ (function (_super) {
    __extends(CancelreservationRequest, _super);
    function CancelreservationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", CancelreservationRequestBody)
    ], CancelreservationRequest.prototype, "request", void 0);
    return CancelreservationRequest;
}(utils_1.SpeakeasyBase));
exports.CancelreservationRequest = CancelreservationRequest;
var CancelreservationResponse = /** @class */ (function (_super) {
    __extends(CancelreservationResponse, _super);
    function CancelreservationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CancelreservationResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CancelreservationResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Cancelreservation201ApplicationJson)
    ], CancelreservationResponse.prototype, "cancelreservation201ApplicationJSONObject", void 0);
    return CancelreservationResponse;
}(utils_1.SpeakeasyBase));
exports.CancelreservationResponse = CancelreservationResponse;
