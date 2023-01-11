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
exports.DeleteGroupUsersIdResponse = exports.DeleteGroupUsersIdRequest = exports.DeleteGroupUsersIdQueryParams = exports.DeleteGroupUsersIdPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var DeleteGroupUsersIdPathParams = /** @class */ (function (_super) {
    __extends(DeleteGroupUsersIdPathParams, _super);
    function DeleteGroupUsersIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], DeleteGroupUsersIdPathParams.prototype, "id", void 0);
    return DeleteGroupUsersIdPathParams;
}(utils_1.SpeakeasyBase));
exports.DeleteGroupUsersIdPathParams = DeleteGroupUsersIdPathParams;
var DeleteGroupUsersIdQueryParams = /** @class */ (function (_super) {
    __extends(DeleteGroupUsersIdQueryParams, _super);
    function DeleteGroupUsersIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=group_id" }),
        __metadata("design:type", Number)
    ], DeleteGroupUsersIdQueryParams.prototype, "groupId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=user_id" }),
        __metadata("design:type", Number)
    ], DeleteGroupUsersIdQueryParams.prototype, "userId", void 0);
    return DeleteGroupUsersIdQueryParams;
}(utils_1.SpeakeasyBase));
exports.DeleteGroupUsersIdQueryParams = DeleteGroupUsersIdQueryParams;
var DeleteGroupUsersIdRequest = /** @class */ (function (_super) {
    __extends(DeleteGroupUsersIdRequest, _super);
    function DeleteGroupUsersIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteGroupUsersIdPathParams)
    ], DeleteGroupUsersIdRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DeleteGroupUsersIdQueryParams)
    ], DeleteGroupUsersIdRequest.prototype, "queryParams", void 0);
    return DeleteGroupUsersIdRequest;
}(utils_1.SpeakeasyBase));
exports.DeleteGroupUsersIdRequest = DeleteGroupUsersIdRequest;
var DeleteGroupUsersIdResponse = /** @class */ (function (_super) {
    __extends(DeleteGroupUsersIdResponse, _super);
    function DeleteGroupUsersIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DeleteGroupUsersIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DeleteGroupUsersIdResponse.prototype, "statusCode", void 0);
    return DeleteGroupUsersIdResponse;
}(utils_1.SpeakeasyBase));
exports.DeleteGroupUsersIdResponse = DeleteGroupUsersIdResponse;
