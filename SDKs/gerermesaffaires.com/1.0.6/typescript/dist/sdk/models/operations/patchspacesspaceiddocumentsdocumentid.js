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
exports.PatchSpacesSpaceIdDocumentsDocumentIdResponse = exports.PatchSpacesSpaceIdDocumentsDocumentIdRequest = exports.PatchSpacesSpaceIdDocumentsDocumentIdRequestBody = exports.PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccounting = exports.PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccountingWorkbookEnum = void 0;
var utils_1 = require("../../../internal/utils");
var class_transformer_1 = require("class-transformer");
var PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccountingWorkbookEnum;
(function (PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccountingWorkbookEnum) {
    PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccountingWorkbookEnum["Customer"] = "customer";
    PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccountingWorkbookEnum["Provider"] = "provider";
    PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccountingWorkbookEnum["Bank"] = "bank";
    PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccountingWorkbookEnum["CashWoucher"] = "cashWoucher";
    PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccountingWorkbookEnum["Fiscal"] = "fiscal";
    PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccountingWorkbookEnum["Insurance"] = "insurance";
    PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccountingWorkbookEnum["Social"] = "social";
    PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccountingWorkbookEnum["Other"] = "other";
    PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccountingWorkbookEnum["Permanent"] = "permanent";
})(PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccountingWorkbookEnum = exports.PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccountingWorkbookEnum || (exports.PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccountingWorkbookEnum = {}));
var PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccounting = /** @class */ (function (_super) {
    __extends(PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccounting, _super);
    function PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccounting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "AccountedOn" }),
        __metadata("design:type", String)
    ], PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccounting.prototype, "accountedOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Workbook" }),
        __metadata("design:type", String)
    ], PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccounting.prototype, "workbook", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "YearMonth" }),
        __metadata("design:type", String)
    ], PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccounting.prototype, "yearMonth", void 0);
    return PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccounting;
}(utils_1.SpeakeasyBase));
exports.PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccounting = PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccounting;
/**
 * document to modify (except name, class and archivaldate)
 */
var PatchSpacesSpaceIdDocumentsDocumentIdRequestBody = /** @class */ (function (_super) {
    __extends(PatchSpacesSpaceIdDocumentsDocumentIdRequestBody, _super);
    function PatchSpacesSpaceIdDocumentsDocumentIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Accounting" }),
        (0, class_transformer_1.Type)(function () { return PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccounting; }),
        __metadata("design:type", PatchSpacesSpaceIdDocumentsDocumentIdRequestBodyAccounting)
    ], PatchSpacesSpaceIdDocumentsDocumentIdRequestBody.prototype, "accounting", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Author" }),
        __metadata("design:type", String)
    ], PatchSpacesSpaceIdDocumentsDocumentIdRequestBody.prototype, "author", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Code" }),
        __metadata("design:type", String)
    ], PatchSpacesSpaceIdDocumentsDocumentIdRequestBody.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Comment" }),
        __metadata("design:type", String)
    ], PatchSpacesSpaceIdDocumentsDocumentIdRequestBody.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Date" }),
        __metadata("design:type", String)
    ], PatchSpacesSpaceIdDocumentsDocumentIdRequestBody.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        (0, class_transformer_1.Expose)({ name: "Title" }),
        __metadata("design:type", String)
    ], PatchSpacesSpaceIdDocumentsDocumentIdRequestBody.prototype, "title", void 0);
    return PatchSpacesSpaceIdDocumentsDocumentIdRequestBody;
}(utils_1.SpeakeasyBase));
exports.PatchSpacesSpaceIdDocumentsDocumentIdRequestBody = PatchSpacesSpaceIdDocumentsDocumentIdRequestBody;
var PatchSpacesSpaceIdDocumentsDocumentIdRequest = /** @class */ (function (_super) {
    __extends(PatchSpacesSpaceIdDocumentsDocumentIdRequest, _super);
    function PatchSpacesSpaceIdDocumentsDocumentIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", PatchSpacesSpaceIdDocumentsDocumentIdRequestBody)
    ], PatchSpacesSpaceIdDocumentsDocumentIdRequest.prototype, "requestBody", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=documentId",
        }),
        __metadata("design:type", String)
    ], PatchSpacesSpaceIdDocumentsDocumentIdRequest.prototype, "documentId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({
            data: "pathParam, style=simple;explode=false;name=spaceId",
        }),
        __metadata("design:type", String)
    ], PatchSpacesSpaceIdDocumentsDocumentIdRequest.prototype, "spaceId", void 0);
    return PatchSpacesSpaceIdDocumentsDocumentIdRequest;
}(utils_1.SpeakeasyBase));
exports.PatchSpacesSpaceIdDocumentsDocumentIdRequest = PatchSpacesSpaceIdDocumentsDocumentIdRequest;
var PatchSpacesSpaceIdDocumentsDocumentIdResponse = /** @class */ (function (_super) {
    __extends(PatchSpacesSpaceIdDocumentsDocumentIdResponse, _super);
    function PatchSpacesSpaceIdDocumentsDocumentIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], PatchSpacesSpaceIdDocumentsDocumentIdResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], PatchSpacesSpaceIdDocumentsDocumentIdResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], PatchSpacesSpaceIdDocumentsDocumentIdResponse.prototype, "rawResponse", void 0);
    return PatchSpacesSpaceIdDocumentsDocumentIdResponse;
}(utils_1.SpeakeasyBase));
exports.PatchSpacesSpaceIdDocumentsDocumentIdResponse = PatchSpacesSpaceIdDocumentsDocumentIdResponse;
