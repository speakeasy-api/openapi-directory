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
exports.UpdateEnvironmentResponse = exports.UpdateEnvironmentRequest = exports.UpdateEnvironment400ApplicationJson = exports.UpdateEnvironment400ApplicationJsonError = exports.UpdateEnvironment200ApplicationJson = exports.UpdateEnvironment200ApplicationJsonEnvironment = exports.UpdateEnvironmentRequestBody = exports.UpdateEnvironmentRequestBodyEnvironment = exports.UpdateEnvironmentRequestBodyEnvironmentValues = exports.UpdateEnvironmentPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var UpdateEnvironmentPathParams = /** @class */ (function (_super) {
    __extends(UpdateEnvironmentPathParams, _super);
    function UpdateEnvironmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=environment_uid" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentPathParams.prototype, "environmentUid", void 0);
    return UpdateEnvironmentPathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateEnvironmentPathParams = UpdateEnvironmentPathParams;
var UpdateEnvironmentRequestBodyEnvironmentValues = /** @class */ (function (_super) {
    __extends(UpdateEnvironmentRequestBodyEnvironmentValues, _super);
    function UpdateEnvironmentRequestBodyEnvironmentValues() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequestBodyEnvironmentValues.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequestBodyEnvironmentValues.prototype, "value", void 0);
    return UpdateEnvironmentRequestBodyEnvironmentValues;
}(utils_1.SpeakeasyBase));
exports.UpdateEnvironmentRequestBodyEnvironmentValues = UpdateEnvironmentRequestBodyEnvironmentValues;
var UpdateEnvironmentRequestBodyEnvironment = /** @class */ (function (_super) {
    __extends(UpdateEnvironmentRequestBodyEnvironment, _super);
    function UpdateEnvironmentRequestBodyEnvironment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateEnvironmentRequestBodyEnvironment.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=values", elemType: UpdateEnvironmentRequestBodyEnvironmentValues }),
        __metadata("design:type", Array)
    ], UpdateEnvironmentRequestBodyEnvironment.prototype, "values", void 0);
    return UpdateEnvironmentRequestBodyEnvironment;
}(utils_1.SpeakeasyBase));
exports.UpdateEnvironmentRequestBodyEnvironment = UpdateEnvironmentRequestBodyEnvironment;
var UpdateEnvironmentRequestBody = /** @class */ (function (_super) {
    __extends(UpdateEnvironmentRequestBody, _super);
    function UpdateEnvironmentRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environment" }),
        __metadata("design:type", UpdateEnvironmentRequestBodyEnvironment)
    ], UpdateEnvironmentRequestBody.prototype, "environment", void 0);
    return UpdateEnvironmentRequestBody;
}(utils_1.SpeakeasyBase));
exports.UpdateEnvironmentRequestBody = UpdateEnvironmentRequestBody;
var UpdateEnvironment200ApplicationJsonEnvironment = /** @class */ (function (_super) {
    __extends(UpdateEnvironment200ApplicationJsonEnvironment, _super);
    function UpdateEnvironment200ApplicationJsonEnvironment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateEnvironment200ApplicationJsonEnvironment.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateEnvironment200ApplicationJsonEnvironment.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], UpdateEnvironment200ApplicationJsonEnvironment.prototype, "uid", void 0);
    return UpdateEnvironment200ApplicationJsonEnvironment;
}(utils_1.SpeakeasyBase));
exports.UpdateEnvironment200ApplicationJsonEnvironment = UpdateEnvironment200ApplicationJsonEnvironment;
var UpdateEnvironment200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateEnvironment200ApplicationJson, _super);
    function UpdateEnvironment200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environment" }),
        __metadata("design:type", UpdateEnvironment200ApplicationJsonEnvironment)
    ], UpdateEnvironment200ApplicationJson.prototype, "environment", void 0);
    return UpdateEnvironment200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateEnvironment200ApplicationJson = UpdateEnvironment200ApplicationJson;
var UpdateEnvironment400ApplicationJsonError = /** @class */ (function (_super) {
    __extends(UpdateEnvironment400ApplicationJsonError, _super);
    function UpdateEnvironment400ApplicationJsonError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], UpdateEnvironment400ApplicationJsonError.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateEnvironment400ApplicationJsonError.prototype, "name", void 0);
    return UpdateEnvironment400ApplicationJsonError;
}(utils_1.SpeakeasyBase));
exports.UpdateEnvironment400ApplicationJsonError = UpdateEnvironment400ApplicationJsonError;
var UpdateEnvironment400ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateEnvironment400ApplicationJson, _super);
    function UpdateEnvironment400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", UpdateEnvironment400ApplicationJsonError)
    ], UpdateEnvironment400ApplicationJson.prototype, "error", void 0);
    return UpdateEnvironment400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateEnvironment400ApplicationJson = UpdateEnvironment400ApplicationJson;
var UpdateEnvironmentRequest = /** @class */ (function (_super) {
    __extends(UpdateEnvironmentRequest, _super);
    function UpdateEnvironmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateEnvironmentPathParams)
    ], UpdateEnvironmentRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateEnvironmentRequestBody)
    ], UpdateEnvironmentRequest.prototype, "request", void 0);
    return UpdateEnvironmentRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateEnvironmentRequest = UpdateEnvironmentRequest;
var UpdateEnvironmentResponse = /** @class */ (function (_super) {
    __extends(UpdateEnvironmentResponse, _super);
    function UpdateEnvironmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateEnvironmentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateEnvironmentResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateEnvironment200ApplicationJson)
    ], UpdateEnvironmentResponse.prototype, "updateEnvironment200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateEnvironment400ApplicationJson)
    ], UpdateEnvironmentResponse.prototype, "updateEnvironment400ApplicationJSONObject", void 0);
    return UpdateEnvironmentResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateEnvironmentResponse = UpdateEnvironmentResponse;
