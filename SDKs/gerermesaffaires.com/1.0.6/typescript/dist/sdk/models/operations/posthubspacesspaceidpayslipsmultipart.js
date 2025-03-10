"use strict";
/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */
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
exports.PostHubSpacesSpaceIdPayslipsMultipartResponse = exports.PostHubSpacesSpaceIdPayslipsMultipart201ApplicationJSON = exports.PostHubSpacesSpaceIdPayslipsMultipartRequest = exports.PostHubSpacesSpaceIdPayslipsMultipartFormData1 = exports.PostHubSpacesSpaceIdPayslipsMultipartFormDataFile = exports.PostHubSpacesSpaceIdPayslipsMultipartFormDataAccounting = exports.PostHubSpacesSpaceIdPayslipsMultipartFormDataAccountingWorkbookEnum = exports.PostHubSpacesSpaceIdPayslipsMultipartSecurity = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var PostHubSpacesSpaceIdPayslipsMultipartSecurity = /** @class */ (function (_super) {
    __extends(PostHubSpacesSpaceIdPayslipsMultipartSecurity, _super);
    function PostHubSpacesSpaceIdPayslipsMultipartSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "security, scheme=true;type=oauth2;name=Authorization",
        }),
        __metadata("design:type", String)
    ], PostHubSpacesSpaceIdPayslipsMultipartSecurity.prototype, "gmaAuth", void 0);
    return PostHubSpacesSpaceIdPayslipsMultipartSecurity;
}(utils_1.SpeakeasyBase));
exports.PostHubSpacesSpaceIdPayslipsMultipartSecurity = PostHubSpacesSpaceIdPayslipsMultipartSecurity;
var PostHubSpacesSpaceIdPayslipsMultipartFormDataAccountingWorkbookEnum;
(function (PostHubSpacesSpaceIdPayslipsMultipartFormDataAccountingWorkbookEnum) {
    PostHubSpacesSpaceIdPayslipsMultipartFormDataAccountingWorkbookEnum["Customer"] = "customer";
    PostHubSpacesSpaceIdPayslipsMultipartFormDataAccountingWorkbookEnum["Provider"] = "provider";
    PostHubSpacesSpaceIdPayslipsMultipartFormDataAccountingWorkbookEnum["Bank"] = "bank";
    PostHubSpacesSpaceIdPayslipsMultipartFormDataAccountingWorkbookEnum["CashWoucher"] = "cashWoucher";
    PostHubSpacesSpaceIdPayslipsMultipartFormDataAccountingWorkbookEnum["Fiscal"] = "fiscal";
    PostHubSpacesSpaceIdPayslipsMultipartFormDataAccountingWorkbookEnum["Insurance"] = "insurance";
    PostHubSpacesSpaceIdPayslipsMultipartFormDataAccountingWorkbookEnum["Social"] = "social";
    PostHubSpacesSpaceIdPayslipsMultipartFormDataAccountingWorkbookEnum["Other"] = "other";
    PostHubSpacesSpaceIdPayslipsMultipartFormDataAccountingWorkbookEnum["Permanent"] = "permanent";
})(PostHubSpacesSpaceIdPayslipsMultipartFormDataAccountingWorkbookEnum = exports.PostHubSpacesSpaceIdPayslipsMultipartFormDataAccountingWorkbookEnum || (exports.PostHubSpacesSpaceIdPayslipsMultipartFormDataAccountingWorkbookEnum = {}));
var PostHubSpacesSpaceIdPayslipsMultipartFormDataAccounting = /** @class */ (function (_super) {
    __extends(PostHubSpacesSpaceIdPayslipsMultipartFormDataAccounting, _super);
    function PostHubSpacesSpaceIdPayslipsMultipartFormDataAccounting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "AccountedOn" }),
        __metadata("design:type", String)
    ], PostHubSpacesSpaceIdPayslipsMultipartFormDataAccounting.prototype, "accountedOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Workbook" }),
        __metadata("design:type", String)
    ], PostHubSpacesSpaceIdPayslipsMultipartFormDataAccounting.prototype, "workbook", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "YearMonth" }),
        __metadata("design:type", String)
    ], PostHubSpacesSpaceIdPayslipsMultipartFormDataAccounting.prototype, "yearMonth", void 0);
    return PostHubSpacesSpaceIdPayslipsMultipartFormDataAccounting;
}(utils_1.SpeakeasyBase));
exports.PostHubSpacesSpaceIdPayslipsMultipartFormDataAccounting = PostHubSpacesSpaceIdPayslipsMultipartFormDataAccounting;
var PostHubSpacesSpaceIdPayslipsMultipartFormDataFile = /** @class */ (function (_super) {
    __extends(PostHubSpacesSpaceIdPayslipsMultipartFormDataFile, _super);
    function PostHubSpacesSpaceIdPayslipsMultipartFormDataFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=File" }),
        __metadata("design:type", String)
    ], PostHubSpacesSpaceIdPayslipsMultipartFormDataFile.prototype, "file", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PostHubSpacesSpaceIdPayslipsMultipartFormDataFile.prototype, "content", void 0);
    return PostHubSpacesSpaceIdPayslipsMultipartFormDataFile;
}(utils_1.SpeakeasyBase));
exports.PostHubSpacesSpaceIdPayslipsMultipartFormDataFile = PostHubSpacesSpaceIdPayslipsMultipartFormDataFile;
/**
 * Document to add
 */
var PostHubSpacesSpaceIdPayslipsMultipartFormData1 = /** @class */ (function (_super) {
    __extends(PostHubSpacesSpaceIdPayslipsMultipartFormData1, _super);
    function PostHubSpacesSpaceIdPayslipsMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=Accounting;json=true" }),
        __metadata("design:type", PostHubSpacesSpaceIdPayslipsMultipartFormDataAccounting)
    ], PostHubSpacesSpaceIdPayslipsMultipartFormData1.prototype, "accounting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=Author" }),
        __metadata("design:type", String)
    ], PostHubSpacesSpaceIdPayslipsMultipartFormData1.prototype, "author", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=Code" }),
        __metadata("design:type", String)
    ], PostHubSpacesSpaceIdPayslipsMultipartFormData1.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=Comment" }),
        __metadata("design:type", String)
    ], PostHubSpacesSpaceIdPayslipsMultipartFormData1.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=Date" }),
        __metadata("design:type", String)
    ], PostHubSpacesSpaceIdPayslipsMultipartFormData1.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, file=true" }),
        __metadata("design:type", PostHubSpacesSpaceIdPayslipsMultipartFormDataFile)
    ], PostHubSpacesSpaceIdPayslipsMultipartFormData1.prototype, "file", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=Title" }),
        __metadata("design:type", String)
    ], PostHubSpacesSpaceIdPayslipsMultipartFormData1.prototype, "title", void 0);
    return PostHubSpacesSpaceIdPayslipsMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.PostHubSpacesSpaceIdPayslipsMultipartFormData1 = PostHubSpacesSpaceIdPayslipsMultipartFormData1;
var PostHubSpacesSpaceIdPayslipsMultipartRequest = /** @class */ (function (_super) {
    __extends(PostHubSpacesSpaceIdPayslipsMultipartRequest, _super);
    function PostHubSpacesSpaceIdPayslipsMultipartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostHubSpacesSpaceIdPayslipsMultipartFormData1)
    ], PostHubSpacesSpaceIdPayslipsMultipartRequest.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=spaceId",
        }),
        __metadata("design:type", String)
    ], PostHubSpacesSpaceIdPayslipsMultipartRequest.prototype, "spaceId", void 0);
    return PostHubSpacesSpaceIdPayslipsMultipartRequest;
}(utils_1.SpeakeasyBase));
exports.PostHubSpacesSpaceIdPayslipsMultipartRequest = PostHubSpacesSpaceIdPayslipsMultipartRequest;
/**
 * Id of documents created
 */
var PostHubSpacesSpaceIdPayslipsMultipart201ApplicationJSON = /** @class */ (function (_super) {
    __extends(PostHubSpacesSpaceIdPayslipsMultipart201ApplicationJSON, _super);
    function PostHubSpacesSpaceIdPayslipsMultipart201ApplicationJSON() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Id" }),
        __metadata("design:type", String)
    ], PostHubSpacesSpaceIdPayslipsMultipart201ApplicationJSON.prototype, "id", void 0);
    return PostHubSpacesSpaceIdPayslipsMultipart201ApplicationJSON;
}(utils_1.SpeakeasyBase));
exports.PostHubSpacesSpaceIdPayslipsMultipart201ApplicationJSON = PostHubSpacesSpaceIdPayslipsMultipart201ApplicationJSON;
var PostHubSpacesSpaceIdPayslipsMultipartResponse = /** @class */ (function (_super) {
    __extends(PostHubSpacesSpaceIdPayslipsMultipartResponse, _super);
    function PostHubSpacesSpaceIdPayslipsMultipartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PostHubSpacesSpaceIdPayslipsMultipartResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostHubSpacesSpaceIdPayslipsMultipartResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PostHubSpacesSpaceIdPayslipsMultipartResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PostHubSpacesSpaceIdPayslipsMultipartResponse.prototype, "rawResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", PostHubSpacesSpaceIdPayslipsMultipart201ApplicationJSON)
    ], PostHubSpacesSpaceIdPayslipsMultipartResponse.prototype, "postHubSpacesSpaceIdPayslipsMultipart201ApplicationJSONObject", void 0);
    return PostHubSpacesSpaceIdPayslipsMultipartResponse;
}(utils_1.SpeakeasyBase));
exports.PostHubSpacesSpaceIdPayslipsMultipartResponse = PostHubSpacesSpaceIdPayslipsMultipartResponse;
