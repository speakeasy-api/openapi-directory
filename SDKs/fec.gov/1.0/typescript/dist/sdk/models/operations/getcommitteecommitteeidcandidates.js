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
exports.GetCommitteeCommitteeIdCandidatesResponse = exports.GetCommitteeCommitteeIdCandidatesRequest = exports.GetCommitteeCommitteeIdCandidatesQueryParams = exports.GetCommitteeCommitteeIdCandidatesOfficeEnum = exports.GetCommitteeCommitteeIdCandidatesIncumbentChallengeEnum = exports.GetCommitteeCommitteeIdCandidatesCandidateStatusEnum = exports.GetCommitteeCommitteeIdCandidatesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetCommitteeCommitteeIdCandidatesPathParams = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdCandidatesPathParams, _super);
    function GetCommitteeCommitteeIdCandidatesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=committee_id" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdCandidatesPathParams.prototype, "committeeId", void 0);
    return GetCommitteeCommitteeIdCandidatesPathParams;
}(utils_1.SpeakeasyBase));
exports.GetCommitteeCommitteeIdCandidatesPathParams = GetCommitteeCommitteeIdCandidatesPathParams;
var GetCommitteeCommitteeIdCandidatesCandidateStatusEnum;
(function (GetCommitteeCommitteeIdCandidatesCandidateStatusEnum) {
    GetCommitteeCommitteeIdCandidatesCandidateStatusEnum["Unknown"] = "";
    GetCommitteeCommitteeIdCandidatesCandidateStatusEnum["C"] = "C";
    GetCommitteeCommitteeIdCandidatesCandidateStatusEnum["F"] = "F";
    GetCommitteeCommitteeIdCandidatesCandidateStatusEnum["N"] = "N";
    GetCommitteeCommitteeIdCandidatesCandidateStatusEnum["P"] = "P";
})(GetCommitteeCommitteeIdCandidatesCandidateStatusEnum = exports.GetCommitteeCommitteeIdCandidatesCandidateStatusEnum || (exports.GetCommitteeCommitteeIdCandidatesCandidateStatusEnum = {}));
var GetCommitteeCommitteeIdCandidatesIncumbentChallengeEnum;
(function (GetCommitteeCommitteeIdCandidatesIncumbentChallengeEnum) {
    GetCommitteeCommitteeIdCandidatesIncumbentChallengeEnum["Unknown"] = "";
    GetCommitteeCommitteeIdCandidatesIncumbentChallengeEnum["I"] = "I";
    GetCommitteeCommitteeIdCandidatesIncumbentChallengeEnum["C"] = "C";
    GetCommitteeCommitteeIdCandidatesIncumbentChallengeEnum["O"] = "O";
})(GetCommitteeCommitteeIdCandidatesIncumbentChallengeEnum = exports.GetCommitteeCommitteeIdCandidatesIncumbentChallengeEnum || (exports.GetCommitteeCommitteeIdCandidatesIncumbentChallengeEnum = {}));
var GetCommitteeCommitteeIdCandidatesOfficeEnum;
(function (GetCommitteeCommitteeIdCandidatesOfficeEnum) {
    GetCommitteeCommitteeIdCandidatesOfficeEnum["Unknown"] = "";
    GetCommitteeCommitteeIdCandidatesOfficeEnum["H"] = "H";
    GetCommitteeCommitteeIdCandidatesOfficeEnum["S"] = "S";
    GetCommitteeCommitteeIdCandidatesOfficeEnum["P"] = "P";
})(GetCommitteeCommitteeIdCandidatesOfficeEnum = exports.GetCommitteeCommitteeIdCandidatesOfficeEnum || (exports.GetCommitteeCommitteeIdCandidatesOfficeEnum = {}));
var GetCommitteeCommitteeIdCandidatesQueryParams = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdCandidatesQueryParams, _super);
    function GetCommitteeCommitteeIdCandidatesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=api_key" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdCandidatesQueryParams.prototype, "apiKey", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=candidate_status" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdCandidatesQueryParams.prototype, "candidateStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=cycle" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdCandidatesQueryParams.prototype, "cycle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=district" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdCandidatesQueryParams.prototype, "district", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=election_year" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdCandidatesQueryParams.prototype, "electionYear", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=federal_funds_flag" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdCandidatesQueryParams.prototype, "federalFundsFlag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=has_raised_funds" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdCandidatesQueryParams.prototype, "hasRaisedFunds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=incumbent_challenge" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdCandidatesQueryParams.prototype, "incumbentChallenge", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdCandidatesQueryParams.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=office" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdCandidatesQueryParams.prototype, "office", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCommitteeCommitteeIdCandidatesQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=party" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdCandidatesQueryParams.prototype, "party", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], GetCommitteeCommitteeIdCandidatesQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdCandidatesQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort_hide_null" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdCandidatesQueryParams.prototype, "sortHideNull", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort_null_only" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdCandidatesQueryParams.prototype, "sortNullOnly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort_nulls_last" }),
        __metadata("design:type", Boolean)
    ], GetCommitteeCommitteeIdCandidatesQueryParams.prototype, "sortNullsLast", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=state" }),
        __metadata("design:type", Array)
    ], GetCommitteeCommitteeIdCandidatesQueryParams.prototype, "state", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=year" }),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdCandidatesQueryParams.prototype, "year", void 0);
    return GetCommitteeCommitteeIdCandidatesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetCommitteeCommitteeIdCandidatesQueryParams = GetCommitteeCommitteeIdCandidatesQueryParams;
var GetCommitteeCommitteeIdCandidatesRequest = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdCandidatesRequest, _super);
    function GetCommitteeCommitteeIdCandidatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCommitteeCommitteeIdCandidatesPathParams)
    ], GetCommitteeCommitteeIdCandidatesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetCommitteeCommitteeIdCandidatesQueryParams)
    ], GetCommitteeCommitteeIdCandidatesRequest.prototype, "queryParams", void 0);
    return GetCommitteeCommitteeIdCandidatesRequest;
}(utils_1.SpeakeasyBase));
exports.GetCommitteeCommitteeIdCandidatesRequest = GetCommitteeCommitteeIdCandidatesRequest;
var GetCommitteeCommitteeIdCandidatesResponse = /** @class */ (function (_super) {
    __extends(GetCommitteeCommitteeIdCandidatesResponse, _super);
    function GetCommitteeCommitteeIdCandidatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.CandidateDetailPage)
    ], GetCommitteeCommitteeIdCandidatesResponse.prototype, "candidateDetailPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetCommitteeCommitteeIdCandidatesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetCommitteeCommitteeIdCandidatesResponse.prototype, "statusCode", void 0);
    return GetCommitteeCommitteeIdCandidatesResponse;
}(utils_1.SpeakeasyBase));
exports.GetCommitteeCommitteeIdCandidatesResponse = GetCommitteeCommitteeIdCandidatesResponse;
