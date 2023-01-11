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
exports.DeleteContainersGroupsNameOrIdResponse = exports.DeleteContainersGroupsNameOrIdRequest = exports.DeleteContainersGroupsNameOrIdHeaders = exports.DeleteContainersGroupsNameOrIdQueryParams = exports.DeleteContainersGroupsNameOrIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var DeleteContainersGroupsNameOrIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteContainersGroupsNameOrIdPathParams, _super);
    function DeleteContainersGroupsNameOrIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=name_or_id" }),
        __metadata("design:type", String)
    ], DeleteContainersGroupsNameOrIdPathParams.prototype, "nameOrId", void 0);
    return DeleteContainersGroupsNameOrIdPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteContainersGroupsNameOrIdPathParams = DeleteContainersGroupsNameOrIdPathParams;
var DeleteContainersGroupsNameOrIdQueryParams = /** @class */ (function (_super) {
    __extends(DeleteContainersGroupsNameOrIdQueryParams, _super);
    function DeleteContainersGroupsNameOrIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=force" }),
        __metadata("design:type", String)
    ], DeleteContainersGroupsNameOrIdQueryParams.prototype, "force", void 0);
    return DeleteContainersGroupsNameOrIdQueryParams;
}(utils_1.SpeakeasyBase));
exports.DeleteContainersGroupsNameOrIdQueryParams = DeleteContainersGroupsNameOrIdQueryParams;
var DeleteContainersGroupsNameOrIdHeaders = /** @class */ (function (_super) {
    __extends(DeleteContainersGroupsNameOrIdHeaders, _super);
    function DeleteContainersGroupsNameOrIdHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" }),
        __metadata("design:type", String)
    ], DeleteContainersGroupsNameOrIdHeaders.prototype, "xAuthProjectId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "header, style=simple;explode=false;name=X-Auth-Token" }),
        __metadata("design:type", String)
    ], DeleteContainersGroupsNameOrIdHeaders.prototype, "xAuthToken", void 0);
    return DeleteContainersGroupsNameOrIdHeaders;
}(utils_1.SpeakeasyBase));
exports.DeleteContainersGroupsNameOrIdHeaders = DeleteContainersGroupsNameOrIdHeaders;
var DeleteContainersGroupsNameOrIdRequest = /** @class */ (function (_super) {
    __extends(DeleteContainersGroupsNameOrIdRequest, _super);
    function DeleteContainersGroupsNameOrIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteContainersGroupsNameOrIdPathParams)
    ], DeleteContainersGroupsNameOrIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteContainersGroupsNameOrIdQueryParams)
    ], DeleteContainersGroupsNameOrIdRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteContainersGroupsNameOrIdHeaders)
    ], DeleteContainersGroupsNameOrIdRequest.prototype, "headers", void 0);
    return DeleteContainersGroupsNameOrIdRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteContainersGroupsNameOrIdRequest = DeleteContainersGroupsNameOrIdRequest;
var DeleteContainersGroupsNameOrIdResponse = /** @class */ (function (_super) {
    __extends(DeleteContainersGroupsNameOrIdResponse, _super);
    function DeleteContainersGroupsNameOrIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteContainersGroupsNameOrIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteContainersGroupsNameOrIdResponse.prototype, "statusCode", void 0);
    return DeleteContainersGroupsNameOrIdResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteContainersGroupsNameOrIdResponse = DeleteContainersGroupsNameOrIdResponse;
