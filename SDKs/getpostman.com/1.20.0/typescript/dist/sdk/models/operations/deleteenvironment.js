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
exports.DeleteEnvironmentResponse = exports.DeleteEnvironmentRequest = exports.DeleteEnvironment404ApplicationJson = exports.DeleteEnvironment404ApplicationJsonError = exports.DeleteEnvironment200ApplicationJson = exports.DeleteEnvironment200ApplicationJsonEnvironment = exports.DeleteEnvironmentPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var DeleteEnvironmentPathParams = /** @class */ (function (_super) {
    __extends(DeleteEnvironmentPathParams, _super);
    function DeleteEnvironmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=environment_uid" }),
        __metadata("design:type", String)
    ], DeleteEnvironmentPathParams.prototype, "environmentUid", void 0);
    return DeleteEnvironmentPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteEnvironmentPathParams = DeleteEnvironmentPathParams;
var DeleteEnvironment200ApplicationJsonEnvironment = /** @class */ (function (_super) {
    __extends(DeleteEnvironment200ApplicationJsonEnvironment, _super);
    function DeleteEnvironment200ApplicationJsonEnvironment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], DeleteEnvironment200ApplicationJsonEnvironment.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], DeleteEnvironment200ApplicationJsonEnvironment.prototype, "uid", void 0);
    return DeleteEnvironment200ApplicationJsonEnvironment;
}(utils_1.SpeakeasyBase));
exports.DeleteEnvironment200ApplicationJsonEnvironment = DeleteEnvironment200ApplicationJsonEnvironment;
var DeleteEnvironment200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteEnvironment200ApplicationJson, _super);
    function DeleteEnvironment200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=environment" }),
        __metadata("design:type", DeleteEnvironment200ApplicationJsonEnvironment)
    ], DeleteEnvironment200ApplicationJson.prototype, "environment", void 0);
    return DeleteEnvironment200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteEnvironment200ApplicationJson = DeleteEnvironment200ApplicationJson;
var DeleteEnvironment404ApplicationJsonError = /** @class */ (function (_super) {
    __extends(DeleteEnvironment404ApplicationJsonError, _super);
    function DeleteEnvironment404ApplicationJsonError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteEnvironment404ApplicationJsonError.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DeleteEnvironment404ApplicationJsonError.prototype, "name", void 0);
    return DeleteEnvironment404ApplicationJsonError;
}(utils_1.SpeakeasyBase));
exports.DeleteEnvironment404ApplicationJsonError = DeleteEnvironment404ApplicationJsonError;
var DeleteEnvironment404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteEnvironment404ApplicationJson, _super);
    function DeleteEnvironment404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error" }),
        __metadata("design:type", DeleteEnvironment404ApplicationJsonError)
    ], DeleteEnvironment404ApplicationJson.prototype, "error", void 0);
    return DeleteEnvironment404ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeleteEnvironment404ApplicationJson = DeleteEnvironment404ApplicationJson;
var DeleteEnvironmentRequest = /** @class */ (function (_super) {
    __extends(DeleteEnvironmentRequest, _super);
    function DeleteEnvironmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteEnvironmentPathParams)
    ], DeleteEnvironmentRequest.prototype, "pathParams", void 0);
    return DeleteEnvironmentRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteEnvironmentRequest = DeleteEnvironmentRequest;
var DeleteEnvironmentResponse = /** @class */ (function (_super) {
    __extends(DeleteEnvironmentResponse, _super);
    function DeleteEnvironmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteEnvironmentResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteEnvironmentResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteEnvironment200ApplicationJson)
    ], DeleteEnvironmentResponse.prototype, "deleteEnvironment200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteEnvironment404ApplicationJson)
    ], DeleteEnvironmentResponse.prototype, "deleteEnvironment404ApplicationJSONObject", void 0);
    return DeleteEnvironmentResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteEnvironmentResponse = DeleteEnvironmentResponse;
