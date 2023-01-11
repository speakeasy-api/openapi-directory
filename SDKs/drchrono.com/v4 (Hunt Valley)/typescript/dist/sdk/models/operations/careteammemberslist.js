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
exports.CareTeamMembersListResponse = exports.CareTeamMembersListRequest = exports.CareTeamMembersList200ApplicationJson = exports.CareTeamMembersListSecurity = exports.CareTeamMembersListQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var CareTeamMembersListQueryParams = /** @class */ (function (_super) {
    __extends(CareTeamMembersListQueryParams, _super);
    function CareTeamMembersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=appointment" }),
        __metadata("design:type", Number)
    ], CareTeamMembersListQueryParams.prototype, "appointment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], CareTeamMembersListQueryParams.prototype, "cursor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=doctor" }),
        __metadata("design:type", Number)
    ], CareTeamMembersListQueryParams.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], CareTeamMembersListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=patient" }),
        __metadata("design:type", Number)
    ], CareTeamMembersListQueryParams.prototype, "patient", void 0);
    return CareTeamMembersListQueryParams;
}(utils_1.SpeakeasyBase));
exports.CareTeamMembersListQueryParams = CareTeamMembersListQueryParams;
var CareTeamMembersListSecurity = /** @class */ (function (_super) {
    __extends(CareTeamMembersListSecurity, _super);
    function CareTeamMembersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeDrchronoOauth2)
    ], CareTeamMembersListSecurity.prototype, "drchronoOauth2", void 0);
    return CareTeamMembersListSecurity;
}(utils_1.SpeakeasyBase));
exports.CareTeamMembersListSecurity = CareTeamMembersListSecurity;
// CareTeamMembersList200ApplicationJson
/**
 * Paginated Result
**/
var CareTeamMembersList200ApplicationJson = /** @class */ (function (_super) {
    __extends(CareTeamMembersList200ApplicationJson, _super);
    function CareTeamMembersList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.CareTeamMember }),
        __metadata("design:type", Array)
    ], CareTeamMembersList200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], CareTeamMembersList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], CareTeamMembersList200ApplicationJson.prototype, "previous", void 0);
    return CareTeamMembersList200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.CareTeamMembersList200ApplicationJson = CareTeamMembersList200ApplicationJson;
var CareTeamMembersListRequest = /** @class */ (function (_super) {
    __extends(CareTeamMembersListRequest, _super);
    function CareTeamMembersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CareTeamMembersListQueryParams)
    ], CareTeamMembersListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CareTeamMembersListSecurity)
    ], CareTeamMembersListRequest.prototype, "security", void 0);
    return CareTeamMembersListRequest;
}(utils_1.SpeakeasyBase));
exports.CareTeamMembersListRequest = CareTeamMembersListRequest;
var CareTeamMembersListResponse = /** @class */ (function (_super) {
    __extends(CareTeamMembersListResponse, _super);
    function CareTeamMembersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], CareTeamMembersListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], CareTeamMembersListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", CareTeamMembersList200ApplicationJson)
    ], CareTeamMembersListResponse.prototype, "careTeamMembersList200ApplicationJSONObject", void 0);
    return CareTeamMembersListResponse;
}(utils_1.SpeakeasyBase));
exports.CareTeamMembersListResponse = CareTeamMembersListResponse;
