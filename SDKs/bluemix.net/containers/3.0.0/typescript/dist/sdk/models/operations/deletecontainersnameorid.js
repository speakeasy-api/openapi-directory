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
exports.DeleteContainersNameOrIdResponse = exports.DeleteContainersNameOrIdRequest = exports.DeleteContainersNameOrIdHeaders = exports.DeleteContainersNameOrIdQueryParams = exports.DeleteContainersNameOrIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var DeleteContainersNameOrIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteContainersNameOrIdPathParams, _super);
    function DeleteContainersNameOrIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=name_or_id" }),
        __metadata("design:type", String)
    ], DeleteContainersNameOrIdPathParams.prototype, "nameOrId", void 0);
    return DeleteContainersNameOrIdPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteContainersNameOrIdPathParams = DeleteContainersNameOrIdPathParams;
var DeleteContainersNameOrIdQueryParams = /** @class */ (function (_super) {
    __extends(DeleteContainersNameOrIdQueryParams, _super);
    function DeleteContainersNameOrIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=force" }),
        __metadata("design:type", Boolean)
    ], DeleteContainersNameOrIdQueryParams.prototype, "force", void 0);
    return DeleteContainersNameOrIdQueryParams;
}(utils_1.SpeakeasyBase));
exports.DeleteContainersNameOrIdQueryParams = DeleteContainersNameOrIdQueryParams;
var DeleteContainersNameOrIdHeaders = /** @class */ (function (_super) {
    __extends(DeleteContainersNameOrIdHeaders, _super);
    function DeleteContainersNameOrIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" }),
        __metadata("design:type", String)
    ], DeleteContainersNameOrIdHeaders.prototype, "xAuthProjectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Auth-Token" }),
        __metadata("design:type", String)
    ], DeleteContainersNameOrIdHeaders.prototype, "xAuthToken", void 0);
    return DeleteContainersNameOrIdHeaders;
}(utils_1.SpeakeasyBase));
exports.DeleteContainersNameOrIdHeaders = DeleteContainersNameOrIdHeaders;
var DeleteContainersNameOrIdRequest = /** @class */ (function (_super) {
    __extends(DeleteContainersNameOrIdRequest, _super);
    function DeleteContainersNameOrIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteContainersNameOrIdPathParams)
    ], DeleteContainersNameOrIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteContainersNameOrIdQueryParams)
    ], DeleteContainersNameOrIdRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteContainersNameOrIdHeaders)
    ], DeleteContainersNameOrIdRequest.prototype, "headers", void 0);
    return DeleteContainersNameOrIdRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteContainersNameOrIdRequest = DeleteContainersNameOrIdRequest;
var DeleteContainersNameOrIdResponse = /** @class */ (function (_super) {
    __extends(DeleteContainersNameOrIdResponse, _super);
    function DeleteContainersNameOrIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteContainersNameOrIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteContainersNameOrIdResponse.prototype, "statusCode", void 0);
    return DeleteContainersNameOrIdResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteContainersNameOrIdResponse = DeleteContainersNameOrIdResponse;
