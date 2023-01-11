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
exports.UnlockconnectorResponse = exports.UnlockconnectorRequest = exports.Unlockconnector201ApplicationJson = exports.UnlockconnectorRequestBody = void 0;
var utils_1 = require("../../../internal/utils");
var UnlockconnectorRequestBody = /** @class */ (function (_super) {
    __extends(UnlockconnectorRequestBody, _super);
    function UnlockconnectorRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chargestation" }),
        __metadata("design:type", String)
    ], UnlockconnectorRequestBody.prototype, "chargestation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=connector" }),
        __metadata("design:type", String)
    ], UnlockconnectorRequestBody.prototype, "connector", void 0);
    return UnlockconnectorRequestBody;
}(utils_1.SpeakeasyBase));
exports.UnlockconnectorRequestBody = UnlockconnectorRequestBody;
var Unlockconnector201ApplicationJson = /** @class */ (function (_super) {
    __extends(Unlockconnector201ApplicationJson, _super);
    function Unlockconnector201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=command" }),
        __metadata("design:type", Object)
    ], Unlockconnector201ApplicationJson.prototype, "command", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], Unlockconnector201ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ok" }),
        __metadata("design:type", Boolean)
    ], Unlockconnector201ApplicationJson.prototype, "ok", void 0);
    return Unlockconnector201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.Unlockconnector201ApplicationJson = Unlockconnector201ApplicationJson;
var UnlockconnectorRequest = /** @class */ (function (_super) {
    __extends(UnlockconnectorRequest, _super);
    function UnlockconnectorRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UnlockconnectorRequestBody)
    ], UnlockconnectorRequest.prototype, "request", void 0);
    return UnlockconnectorRequest;
}(utils_1.SpeakeasyBase));
exports.UnlockconnectorRequest = UnlockconnectorRequest;
var UnlockconnectorResponse = /** @class */ (function (_super) {
    __extends(UnlockconnectorResponse, _super);
    function UnlockconnectorResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UnlockconnectorResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UnlockconnectorResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Unlockconnector201ApplicationJson)
    ], UnlockconnectorResponse.prototype, "unlockconnector201ApplicationJSONObject", void 0);
    return UnlockconnectorResponse;
}(utils_1.SpeakeasyBase));
exports.UnlockconnectorResponse = UnlockconnectorResponse;
