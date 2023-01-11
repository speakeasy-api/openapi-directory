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
exports.ClinicalNoteTemplatesListResponse = exports.ClinicalNoteTemplatesListRequest = exports.ClinicalNoteTemplatesList200ApplicationJson = exports.ClinicalNoteTemplatesListSecurity = exports.ClinicalNoteTemplatesListQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ClinicalNoteTemplatesListQueryParams = /** @class */ (function (_super) {
    __extends(ClinicalNoteTemplatesListQueryParams, _super);
    function ClinicalNoteTemplatesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], ClinicalNoteTemplatesListQueryParams.prototype, "cursor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=doctor" }),
        __metadata("design:type", Number)
    ], ClinicalNoteTemplatesListQueryParams.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ClinicalNoteTemplatesListQueryParams.prototype, "pageSize", void 0);
    return ClinicalNoteTemplatesListQueryParams;
}(utils_1.SpeakeasyBase));
exports.ClinicalNoteTemplatesListQueryParams = ClinicalNoteTemplatesListQueryParams;
var ClinicalNoteTemplatesListSecurity = /** @class */ (function (_super) {
    __extends(ClinicalNoteTemplatesListSecurity, _super);
    function ClinicalNoteTemplatesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeDrchronoOauth2)
    ], ClinicalNoteTemplatesListSecurity.prototype, "drchronoOauth2", void 0);
    return ClinicalNoteTemplatesListSecurity;
}(utils_1.SpeakeasyBase));
exports.ClinicalNoteTemplatesListSecurity = ClinicalNoteTemplatesListSecurity;
// ClinicalNoteTemplatesList200ApplicationJson
/**
 * Paginated Result
**/
var ClinicalNoteTemplatesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(ClinicalNoteTemplatesList200ApplicationJson, _super);
    function ClinicalNoteTemplatesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.SoapNoteCustomReport }),
        __metadata("design:type", Array)
    ], ClinicalNoteTemplatesList200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ClinicalNoteTemplatesList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], ClinicalNoteTemplatesList200ApplicationJson.prototype, "previous", void 0);
    return ClinicalNoteTemplatesList200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ClinicalNoteTemplatesList200ApplicationJson = ClinicalNoteTemplatesList200ApplicationJson;
var ClinicalNoteTemplatesListRequest = /** @class */ (function (_super) {
    __extends(ClinicalNoteTemplatesListRequest, _super);
    function ClinicalNoteTemplatesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClinicalNoteTemplatesListQueryParams)
    ], ClinicalNoteTemplatesListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClinicalNoteTemplatesListSecurity)
    ], ClinicalNoteTemplatesListRequest.prototype, "security", void 0);
    return ClinicalNoteTemplatesListRequest;
}(utils_1.SpeakeasyBase));
exports.ClinicalNoteTemplatesListRequest = ClinicalNoteTemplatesListRequest;
var ClinicalNoteTemplatesListResponse = /** @class */ (function (_super) {
    __extends(ClinicalNoteTemplatesListResponse, _super);
    function ClinicalNoteTemplatesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ClinicalNoteTemplatesListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ClinicalNoteTemplatesListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClinicalNoteTemplatesList200ApplicationJson)
    ], ClinicalNoteTemplatesListResponse.prototype, "clinicalNoteTemplatesList200ApplicationJSONObject", void 0);
    return ClinicalNoteTemplatesListResponse;
}(utils_1.SpeakeasyBase));
exports.ClinicalNoteTemplatesListResponse = ClinicalNoteTemplatesListResponse;
