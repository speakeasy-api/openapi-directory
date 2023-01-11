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
exports.FeeSchedulesListResponse = exports.FeeSchedulesListRequest = exports.FeeSchedulesList200ApplicationJson = exports.FeeSchedulesListSecurity = exports.FeeSchedulesListQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var FeeSchedulesListQueryParams = /** @class */ (function (_super) {
    __extends(FeeSchedulesListQueryParams, _super);
    function FeeSchedulesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=code" }),
        __metadata("design:type", String)
    ], FeeSchedulesListQueryParams.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=code_type" }),
        __metadata("design:type", String)
    ], FeeSchedulesListQueryParams.prototype, "codeType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cursor" }),
        __metadata("design:type", String)
    ], FeeSchedulesListQueryParams.prototype, "cursor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=doctor" }),
        __metadata("design:type", Number)
    ], FeeSchedulesListQueryParams.prototype, "doctor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], FeeSchedulesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=payer_id" }),
        __metadata("design:type", String)
    ], FeeSchedulesListQueryParams.prototype, "payerId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=since" }),
        __metadata("design:type", String)
    ], FeeSchedulesListQueryParams.prototype, "since", void 0);
    return FeeSchedulesListQueryParams;
}(utils_1.SpeakeasyBase));
exports.FeeSchedulesListQueryParams = FeeSchedulesListQueryParams;
var FeeSchedulesListSecurity = /** @class */ (function (_super) {
    __extends(FeeSchedulesListSecurity, _super);
    function FeeSchedulesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeDrchronoOauth2)
    ], FeeSchedulesListSecurity.prototype, "drchronoOauth2", void 0);
    return FeeSchedulesListSecurity;
}(utils_1.SpeakeasyBase));
exports.FeeSchedulesListSecurity = FeeSchedulesListSecurity;
// FeeSchedulesList200ApplicationJson
/**
 * Paginated Result
**/
var FeeSchedulesList200ApplicationJson = /** @class */ (function (_super) {
    __extends(FeeSchedulesList200ApplicationJson, _super);
    function FeeSchedulesList200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: shared.DoctorFeeSchedule }),
        __metadata("design:type", Array)
    ], FeeSchedulesList200ApplicationJson.prototype, "data", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], FeeSchedulesList200ApplicationJson.prototype, "next", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=previous" }),
        __metadata("design:type", String)
    ], FeeSchedulesList200ApplicationJson.prototype, "previous", void 0);
    return FeeSchedulesList200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.FeeSchedulesList200ApplicationJson = FeeSchedulesList200ApplicationJson;
var FeeSchedulesListRequest = /** @class */ (function (_super) {
    __extends(FeeSchedulesListRequest, _super);
    function FeeSchedulesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FeeSchedulesListQueryParams)
    ], FeeSchedulesListRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FeeSchedulesListSecurity)
    ], FeeSchedulesListRequest.prototype, "security", void 0);
    return FeeSchedulesListRequest;
}(utils_1.SpeakeasyBase));
exports.FeeSchedulesListRequest = FeeSchedulesListRequest;
var FeeSchedulesListResponse = /** @class */ (function (_super) {
    __extends(FeeSchedulesListResponse, _super);
    function FeeSchedulesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], FeeSchedulesListResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], FeeSchedulesListResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", FeeSchedulesList200ApplicationJson)
    ], FeeSchedulesListResponse.prototype, "feeSchedulesList200ApplicationJSONObject", void 0);
    return FeeSchedulesListResponse;
}(utils_1.SpeakeasyBase));
exports.FeeSchedulesListResponse = FeeSchedulesListResponse;
