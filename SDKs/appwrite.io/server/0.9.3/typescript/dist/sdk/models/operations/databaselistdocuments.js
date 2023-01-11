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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseListDocumentsResponse = exports.DatabaseListDocumentsRequest = exports.DatabaseListDocumentsSecurity = exports.DatabaseListDocumentsQueryParams = exports.DatabaseListDocumentsPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var DatabaseListDocumentsPathParams = /** @class */ (function (_super) {
    __extends(DatabaseListDocumentsPathParams, _super);
    function DatabaseListDocumentsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=collectionId" }),
        __metadata("design:type", String)
    ], DatabaseListDocumentsPathParams.prototype, "collectionId", void 0);
    return DatabaseListDocumentsPathParams;
}(utils_1.SpeakeasyBase));
exports.DatabaseListDocumentsPathParams = DatabaseListDocumentsPathParams;
var DatabaseListDocumentsQueryParams = /** @class */ (function (_super) {
    __extends(DatabaseListDocumentsQueryParams, _super);
    function DatabaseListDocumentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=filters" }),
        __metadata("design:type", Array)
    ], DatabaseListDocumentsQueryParams.prototype, "filters", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], DatabaseListDocumentsQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], DatabaseListDocumentsQueryParams.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=orderCast" }),
        __metadata("design:type", String)
    ], DatabaseListDocumentsQueryParams.prototype, "orderCast", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=orderField" }),
        __metadata("design:type", String)
    ], DatabaseListDocumentsQueryParams.prototype, "orderField", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=orderType" }),
        __metadata("design:type", String)
    ], DatabaseListDocumentsQueryParams.prototype, "orderType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], DatabaseListDocumentsQueryParams.prototype, "search", void 0);
    return DatabaseListDocumentsQueryParams;
}(utils_1.SpeakeasyBase));
exports.DatabaseListDocumentsQueryParams = DatabaseListDocumentsQueryParams;
var DatabaseListDocumentsSecurity = /** @class */ (function (_super) {
    __extends(DatabaseListDocumentsSecurity, _super);
    function DatabaseListDocumentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeJwt)
    ], DatabaseListDocumentsSecurity.prototype, "jwt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeKey)
    ], DatabaseListDocumentsSecurity.prototype, "key", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeProject)
    ], DatabaseListDocumentsSecurity.prototype, "project", void 0);
    return DatabaseListDocumentsSecurity;
}(utils_1.SpeakeasyBase));
exports.DatabaseListDocumentsSecurity = DatabaseListDocumentsSecurity;
var DatabaseListDocumentsRequest = /** @class */ (function (_super) {
    __extends(DatabaseListDocumentsRequest, _super);
    function DatabaseListDocumentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DatabaseListDocumentsPathParams)
    ], DatabaseListDocumentsRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DatabaseListDocumentsQueryParams)
    ], DatabaseListDocumentsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", DatabaseListDocumentsSecurity)
    ], DatabaseListDocumentsRequest.prototype, "security", void 0);
    return DatabaseListDocumentsRequest;
}(utils_1.SpeakeasyBase));
exports.DatabaseListDocumentsRequest = DatabaseListDocumentsRequest;
var DatabaseListDocumentsResponse = /** @class */ (function (_super) {
    __extends(DatabaseListDocumentsResponse, _super);
    function DatabaseListDocumentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], DatabaseListDocumentsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], DatabaseListDocumentsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.DocumentList)
    ], DatabaseListDocumentsResponse.prototype, "documentList", void 0);
    return DatabaseListDocumentsResponse;
}(utils_1.SpeakeasyBase));
exports.DatabaseListDocumentsResponse = DatabaseListDocumentsResponse;
