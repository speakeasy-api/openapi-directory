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
exports.EligibilityChecksListResponse = exports.EligibilityChecksListRequest = exports.EligibilityChecksList200ApplicationJson = exports.EligibilityChecksListSecurity = exports.EligibilityChecksListQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var EligibilityChecksListQueryParams = /** @class */ (function (_super) {
    __extends(EligibilityChecksListQueryParams, _super);
    function EligibilityChecksListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=appointment" }),
        __metadata("design:type", Number)
    ], EligibilityChecksListQueryParams.prototype, "appointment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=appointment_date" }),
        __metadata("design:type", String)
    ], EligibilityChecksListQueryParams.prototype, "appointmentDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=appointment_date_range" }),
        __metadata("design:type", String)
    ], EligibilityChecksListQueryParams.prototype, "appointmentDateRange", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], EligibilityChecksListQueryParams.prototype, "cursor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=doctor" }),
        __metadata("design:type", Number)
    ], EligibilityChecksListQueryParams.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], EligibilityChecksListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=patient" }),
        __metadata("design:type", Number)
    ], EligibilityChecksListQueryParams.prototype, "patient", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query_date" }),
        __metadata("design:type", String)
    ], EligibilityChecksListQueryParams.prototype, "queryDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query_date_range" }),
        __metadata("design:type", String)
    ], EligibilityChecksListQueryParams.prototype, "queryDateRange", void 0);
    return EligibilityChecksListQueryParams;
}(utils_1.SpeakeasyBase));
exports.EligibilityChecksListQueryParams = EligibilityChecksListQueryParams;
var EligibilityChecksListSecurity = /** @class */ (function (_super) {
    __extends(EligibilityChecksListSecurity, _super);
    function EligibilityChecksListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeDrchronoOauth2)
    ], EligibilityChecksListSecurity.prototype, "drchronoOauth2", void 0);
    return EligibilityChecksListSecurity;
}(utils_1.SpeakeasyBase));
exports.EligibilityChecksListSecurity = EligibilityChecksListSecurity;
// EligibilityChecksList200ApplicationJson
/**
 * Paginated Result
**/
var EligibilityChecksList200ApplicationJson = /** @class */ (function (_super) {
    __extends(EligibilityChecksList200ApplicationJson, _super);
    function EligibilityChecksList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.Coverage }),
        __metadata("design:type", Array)
    ], EligibilityChecksList200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], EligibilityChecksList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], EligibilityChecksList200ApplicationJson.prototype, "previous", void 0);
    return EligibilityChecksList200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.EligibilityChecksList200ApplicationJson = EligibilityChecksList200ApplicationJson;
var EligibilityChecksListRequest = /** @class */ (function (_super) {
    __extends(EligibilityChecksListRequest, _super);
    function EligibilityChecksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EligibilityChecksListQueryParams)
    ], EligibilityChecksListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EligibilityChecksListSecurity)
    ], EligibilityChecksListRequest.prototype, "security", void 0);
    return EligibilityChecksListRequest;
}(utils_1.SpeakeasyBase));
exports.EligibilityChecksListRequest = EligibilityChecksListRequest;
var EligibilityChecksListResponse = /** @class */ (function (_super) {
    __extends(EligibilityChecksListResponse, _super);
    function EligibilityChecksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], EligibilityChecksListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], EligibilityChecksListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", EligibilityChecksList200ApplicationJson)
    ], EligibilityChecksListResponse.prototype, "eligibilityChecksList200ApplicationJSONObject", void 0);
    return EligibilityChecksListResponse;
}(utils_1.SpeakeasyBase));
exports.EligibilityChecksListResponse = EligibilityChecksListResponse;
