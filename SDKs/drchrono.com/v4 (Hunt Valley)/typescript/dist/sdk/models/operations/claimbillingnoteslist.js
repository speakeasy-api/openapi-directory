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
exports.ClaimBillingNotesListResponse = exports.ClaimBillingNotesListRequest = exports.ClaimBillingNotesList200ApplicationJson = exports.ClaimBillingNotesListSecurity = exports.ClaimBillingNotesListQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ClaimBillingNotesListQueryParams = /** @class */ (function (_super) {
    __extends(ClaimBillingNotesListQueryParams, _super);
    function ClaimBillingNotesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=appointment" }),
        __metadata("design:type", Number)
    ], ClaimBillingNotesListQueryParams.prototype, "appointment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], ClaimBillingNotesListQueryParams.prototype, "cursor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=doctor" }),
        __metadata("design:type", Number)
    ], ClaimBillingNotesListQueryParams.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ClaimBillingNotesListQueryParams.prototype, "pageSize", void 0);
    return ClaimBillingNotesListQueryParams;
}(utils_1.SpeakeasyBase));
exports.ClaimBillingNotesListQueryParams = ClaimBillingNotesListQueryParams;
var ClaimBillingNotesListSecurity = /** @class */ (function (_super) {
    __extends(ClaimBillingNotesListSecurity, _super);
    function ClaimBillingNotesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeDrchronoOauth2)
    ], ClaimBillingNotesListSecurity.prototype, "drchronoOauth2", void 0);
    return ClaimBillingNotesListSecurity;
}(utils_1.SpeakeasyBase));
exports.ClaimBillingNotesListSecurity = ClaimBillingNotesListSecurity;
// ClaimBillingNotesList200ApplicationJson
/**
 * Paginated Result
**/
var ClaimBillingNotesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(ClaimBillingNotesList200ApplicationJson, _super);
    function ClaimBillingNotesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.ClaimBillingNotes }),
        __metadata("design:type", Array)
    ], ClaimBillingNotesList200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ClaimBillingNotesList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], ClaimBillingNotesList200ApplicationJson.prototype, "previous", void 0);
    return ClaimBillingNotesList200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ClaimBillingNotesList200ApplicationJson = ClaimBillingNotesList200ApplicationJson;
var ClaimBillingNotesListRequest = /** @class */ (function (_super) {
    __extends(ClaimBillingNotesListRequest, _super);
    function ClaimBillingNotesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClaimBillingNotesListQueryParams)
    ], ClaimBillingNotesListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClaimBillingNotesListSecurity)
    ], ClaimBillingNotesListRequest.prototype, "security", void 0);
    return ClaimBillingNotesListRequest;
}(utils_1.SpeakeasyBase));
exports.ClaimBillingNotesListRequest = ClaimBillingNotesListRequest;
var ClaimBillingNotesListResponse = /** @class */ (function (_super) {
    __extends(ClaimBillingNotesListResponse, _super);
    function ClaimBillingNotesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ClaimBillingNotesListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ClaimBillingNotesListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ClaimBillingNotesList200ApplicationJson)
    ], ClaimBillingNotesListResponse.prototype, "claimBillingNotesList200ApplicationJSONObject", void 0);
    return ClaimBillingNotesListResponse;
}(utils_1.SpeakeasyBase));
exports.ClaimBillingNotesListResponse = ClaimBillingNotesListResponse;
