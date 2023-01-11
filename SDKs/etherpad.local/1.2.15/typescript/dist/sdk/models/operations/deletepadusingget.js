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
exports.DeletePadUsingGetResponse = exports.DeletePadUsingGetRequest = exports.DeletePadUsingGet500ApplicationJson = exports.DeletePadUsingGet401ApplicationJson = exports.DeletePadUsingGet400ApplicationJson = exports.DeletePadUsingGet200ApplicationJson = exports.DeletePadUsingGetQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var DeletePadUsingGetQueryParams = /** @class */ (function (_super) {
    __extends(DeletePadUsingGetQueryParams, _super);
    function DeletePadUsingGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=padID" }),
        __metadata("design:type", String)
    ], DeletePadUsingGetQueryParams.prototype, "padID", void 0);
    return DeletePadUsingGetQueryParams;
}(utils_1.SpeakeasyBase));
exports.DeletePadUsingGetQueryParams = DeletePadUsingGetQueryParams;
var DeletePadUsingGet200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeletePadUsingGet200ApplicationJson, _super);
    function DeletePadUsingGet200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeletePadUsingGet200ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], DeletePadUsingGet200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeletePadUsingGet200ApplicationJson.prototype, "message", void 0);
    return DeletePadUsingGet200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeletePadUsingGet200ApplicationJson = DeletePadUsingGet200ApplicationJson;
var DeletePadUsingGet400ApplicationJson = /** @class */ (function (_super) {
    __extends(DeletePadUsingGet400ApplicationJson, _super);
    function DeletePadUsingGet400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeletePadUsingGet400ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], DeletePadUsingGet400ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeletePadUsingGet400ApplicationJson.prototype, "message", void 0);
    return DeletePadUsingGet400ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeletePadUsingGet400ApplicationJson = DeletePadUsingGet400ApplicationJson;
var DeletePadUsingGet401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeletePadUsingGet401ApplicationJson, _super);
    function DeletePadUsingGet401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeletePadUsingGet401ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], DeletePadUsingGet401ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeletePadUsingGet401ApplicationJson.prototype, "message", void 0);
    return DeletePadUsingGet401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeletePadUsingGet401ApplicationJson = DeletePadUsingGet401ApplicationJson;
var DeletePadUsingGet500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeletePadUsingGet500ApplicationJson, _super);
    function DeletePadUsingGet500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", Number)
    ], DeletePadUsingGet500ApplicationJson.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", Object)
    ], DeletePadUsingGet500ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeletePadUsingGet500ApplicationJson.prototype, "message", void 0);
    return DeletePadUsingGet500ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.DeletePadUsingGet500ApplicationJson = DeletePadUsingGet500ApplicationJson;
var DeletePadUsingGetRequest = /** @class */ (function (_super) {
    __extends(DeletePadUsingGetRequest, _super);
    function DeletePadUsingGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeletePadUsingGetQueryParams)
    ], DeletePadUsingGetRequest.prototype, "queryParams", void 0);
    return DeletePadUsingGetRequest;
}(utils_1.SpeakeasyBase));
exports.DeletePadUsingGetRequest = DeletePadUsingGetRequest;
var DeletePadUsingGetResponse = /** @class */ (function (_super) {
    __extends(DeletePadUsingGetResponse, _super);
    function DeletePadUsingGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeletePadUsingGetResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeletePadUsingGetResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeletePadUsingGet200ApplicationJson)
    ], DeletePadUsingGetResponse.prototype, "deletePadUsingGET200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeletePadUsingGet400ApplicationJson)
    ], DeletePadUsingGetResponse.prototype, "deletePadUsingGET400ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeletePadUsingGet401ApplicationJson)
    ], DeletePadUsingGetResponse.prototype, "deletePadUsingGET401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeletePadUsingGet500ApplicationJson)
    ], DeletePadUsingGetResponse.prototype, "deletePadUsingGET500ApplicationJSONObject", void 0);
    return DeletePadUsingGetResponse;
}(utils_1.SpeakeasyBase));
exports.DeletePadUsingGetResponse = DeletePadUsingGetResponse;
