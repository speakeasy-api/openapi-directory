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
exports.GetAlmawsV1TaskListsRsLendingRequestsResponse = exports.GetAlmawsV1TaskListsRsLendingRequestsRequest = exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJson = exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest = exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestUserRequest = exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestSuppliedFormat = exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestStatus = exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCost = exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCostCurrency = exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRsNote = exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequester = exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequestedLanguage = exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestReadingRoom = exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPreferredSendMethod = exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPickupLocation = exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPartner = exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestLevelOfService = exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFund = exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFormat = exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCopyrightStatus = exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCitationType = exports.GetAlmawsV1TaskListsRsLendingRequestsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetAlmawsV1TaskListsRsLendingRequestsQueryParams = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRsLendingRequestsQueryParams, _super);
    function GetAlmawsV1TaskListsRsLendingRequestsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=library" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequestsQueryParams.prototype, "library", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=partner" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequestsQueryParams.prototype, "partner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=printed" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequestsQueryParams.prototype, "printed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=reported" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequestsQueryParams.prototype, "reported", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=requested_format" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequestsQueryParams.prototype, "requestedFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=status" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequestsQueryParams.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=supplied_format" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequestsQueryParams.prototype, "suppliedFormat", void 0);
    return GetAlmawsV1TaskListsRsLendingRequestsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRsLendingRequestsQueryParams = GetAlmawsV1TaskListsRsLendingRequestsQueryParams;
// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCitationType
/**
 * Type of the requested resource. For example, book or article. Mandatory for borrowing requests. Mandatory when creating a lending request unless mms_id is supplied. For borrowing requests, possible codes are listed in 'PhysicalReadingListCitationTypes' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BK / CR. For lending requests, possible codes are listed in PR_CitationType [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BOOK / JOURNAL.
**/
var GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCitationType = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCitationType, _super);
    function GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCitationType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCitationType.prototype, "desc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCitationType.prototype, "value", void 0);
    return GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCitationType;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCitationType = GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCitationType;
// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCopyrightStatus
/**
 * The copyright status of the request. Relevant if requested format is Digital, and 'rs_borrower_copyright_management' in customer parameters is true. Possible options are listed in 'ResourceSharingCopyrightsStatus' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request. Relevant for GET, POST and PUT of borrowing requests, and GET of lending requests.
**/
var GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCopyrightStatus = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCopyrightStatus, _super);
    function GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCopyrightStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCopyrightStatus.prototype, "desc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCopyrightStatus.prototype, "value", void 0);
    return GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCopyrightStatus;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCopyrightStatus = GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCopyrightStatus;
// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFormat
/**
 * Format of the resource requested. For example, physical or digital. Mandatory. Possible codes are listed in RequestFormats [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
**/
var GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFormat = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFormat, _super);
    function GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFormat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFormat.prototype, "desc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFormat.prototype, "value", void 0);
    return GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFormat;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFormat = GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFormat;
// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFund
/**
 * The code of the fund. Not relevant for lending requests.
**/
var GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFund = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFund, _super);
    function GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFund() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFund.prototype, "desc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFund.prototype, "value", void 0);
    return GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFund;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFund = GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFund;
// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestLevelOfService
/**
 * The code of the resource sharing request Level of Service. Possible options are listed in 'LevelOfService' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request.
**/
var GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestLevelOfService = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestLevelOfService, _super);
    function GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestLevelOfService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestLevelOfService.prototype, "desc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestLevelOfService.prototype, "value", void 0);
    return GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestLevelOfService;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestLevelOfService = GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestLevelOfService;
// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPartner
/**
 * The code of the partner related to this request. See [Get partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07). Mandatory when creating a lending request.
**/
var GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPartner = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPartner, _super);
    function GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPartner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPartner.prototype, "desc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPartner.prototype, "value", void 0);
    return GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPartner;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPartner = GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPartner;
// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPickupLocation
/**
 * The pickup library code where the resource will be delivered. Relevant and mandatory for physical format delivery Borrowing request. Optional for digital format. Not relevant for lending requests.
**/
var GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPickupLocation = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPickupLocation, _super);
    function GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPickupLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPickupLocation.prototype, "desc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPickupLocation.prototype, "value", void 0);
    return GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPickupLocation;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPickupLocation = GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPickupLocation;
// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPreferredSendMethod
/**
 * Preferred send method. Possible options are listed in 'ResourceSharingRequestSendMethod' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Currently not relevant for lending requests.
**/
var GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPreferredSendMethod = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPreferredSendMethod, _super);
    function GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPreferredSendMethod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPreferredSendMethod.prototype, "desc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPreferredSendMethod.prototype, "value", void 0);
    return GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPreferredSendMethod;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPreferredSendMethod = GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPreferredSendMethod;
// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestReadingRoom
/**
 * The code of the reading room where the item will be picked up. Mandatory when for_reading_room_only is true. Not relevant for lending requests.
**/
var GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestReadingRoom = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestReadingRoom, _super);
    function GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestReadingRoom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestReadingRoom.prototype, "desc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestReadingRoom.prototype, "value", void 0);
    return GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestReadingRoom;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestReadingRoom = GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestReadingRoom;
// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequestedLanguage
/**
 * The requested language for the resource sharing request. Possible codes are the enabled fields in ResourceSharingLanguages [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Default is null.
**/
var GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequestedLanguage = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequestedLanguage, _super);
    function GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequestedLanguage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequestedLanguage.prototype, "desc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequestedLanguage.prototype, "value", void 0);
    return GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequestedLanguage;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequestedLanguage = GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequestedLanguage;
// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequester
/**
 * The primary identifier and full name of the requesting user. Relevant for borrowing requests. Not relevant for lending requests.
**/
var GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequester = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequester, _super);
    function GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequester() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequester.prototype, "desc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequester.prototype, "value", void 0);
    return GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequester;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequester = GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequester;
// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRsNote
/**
 * Specific related note.
**/
var GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRsNote = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRsNote, _super);
    function GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRsNote() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRsNote.prototype, "content", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_by" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRsNote.prototype, "createdBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_date" }),
        __metadata("design:type", Date)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRsNote.prototype, "createdDate", void 0);
    return GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRsNote;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRsNote = GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRsNote;
// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCostCurrency
/**
 * The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
**/
var GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCostCurrency = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCostCurrency, _super);
    function GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCostCurrency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCostCurrency.prototype, "desc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCostCurrency.prototype, "value", void 0);
    return GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCostCurrency;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCostCurrency = GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCostCurrency;
var GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCost = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCost, _super);
    function GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=currency" }),
        __metadata("design:type", GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCostCurrency)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCost.prototype, "currency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sum" }),
        __metadata("design:type", Number)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCost.prototype, "sum", void 0);
    return GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCost;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCost = GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCost;
// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestStatus
/**
 * The resource sharing request status. Borrowing request: Possible codes are listed in MandatoryBorrowingWorkflowSteps or OptionalBorrowingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Lending request: Possible codes are listed in MandatoryLendingWorkflowSteps or OptionalLendingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
**/
var GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestStatus = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestStatus, _super);
    function GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestStatus.prototype, "desc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestStatus.prototype, "value", void 0);
    return GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestStatus;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestStatus = GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestStatus;
// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestSuppliedFormat
/**
 * Format of the supplied item. For example, physical or digital. Possible codes are listed in RequestFormats [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Relevant only after the request is supplied.
**/
var GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestSuppliedFormat = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestSuppliedFormat, _super);
    function GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestSuppliedFormat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestSuppliedFormat.prototype, "desc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestSuppliedFormat.prototype, "value", void 0);
    return GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestSuppliedFormat;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestSuppliedFormat = GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestSuppliedFormat;
// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestUserRequest
/**
 * The request linked to the resource sharing request. Borrowing requests: this is the related user request. Lending requests: this is the move/digitization request (if exists). See [GET user's request API](https://developers.exlibrisgroup.com/alma/apis/users/GET/gwPcGly021r0XQMGAttqcPPFoLNxBoEZbQsUC/MWTX7aNWi0EYKYFUfYyI8KvpG73JPdiJpJhUA=/0aa8d36f-53d6-48ff-8996-485b90b103e4).
**/
var GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestUserRequest = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestUserRequest, _super);
    function GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestUserRequest.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestUserRequest.prototype, "value", void 0);
    return GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestUserRequest;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestUserRequest = GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestUserRequest;
// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest
/**
 * Resource sharing request Object.
**/
var GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest, _super);
    function GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additional_barcode" }),
        __metadata("design:type", Array)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "additionalBarcode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=additional_person_name" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "additionalPersonName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=agree_to_copyright_terms" }),
        __metadata("design:type", Boolean)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "agreeToCopyrightTerms", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_other_formats" }),
        __metadata("design:type", Boolean)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "allowOtherFormats", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=author" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "author", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=author_initials" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "authorInitials", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=barcode" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "barcode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=bib_note" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "bibNote", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=call_number" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "callNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chapter" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "chapter", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chapter_author" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "chapterAuthor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=chapter_title" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "chapterTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=citation_type" }),
        __metadata("design:type", GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCitationType)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "citationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=copyright_status" }),
        __metadata("design:type", GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCopyrightStatus)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "copyrightStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_date" }),
        __metadata("design:type", Date)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "createdDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_time" }),
        __metadata("design:type", Date)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "createdTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=doi" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "doi", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=edition" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "edition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=editor" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "editor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end_page" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "endPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=external_id" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "externalId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=format" }),
        __metadata("design:type", GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFormat)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "format", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=fund" }),
        __metadata("design:type", GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFund)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "fund", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_active_notes" }),
        __metadata("design:type", Boolean)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "hasActiveNotes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isbn" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "isbn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issn" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "issn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issue" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "issue", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=journal_title" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "journalTitle", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_interest_date" }),
        __metadata("design:type", Date)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "lastInterestDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_modified_date" }),
        __metadata("design:type", Date)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "lastModifiedDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_modified_time" }),
        __metadata("design:type", Date)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "lastModifiedTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lcc_number" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "lccNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=level_of_service" }),
        __metadata("design:type", GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestLevelOfService)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "levelOfService", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=lost_damaged_fee" }),
        __metadata("design:type", shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "lostDamagedFee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=maximum_fee" }),
        __metadata("design:type", Number)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "maximumFee", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mms_id" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "mmsId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=need_patron_info" }),
        __metadata("design:type", Boolean)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "needPatronInfo", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=note" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "note", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=oclc_number" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "oclcNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=other_standard_id" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "otherStandardId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=owner" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "owner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "pages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=part" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "part", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=partner" }),
        __metadata("design:type", GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPartner)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "partner", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pickup_location" }),
        __metadata("design:type", GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPickupLocation)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "pickupLocation", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pickup_location_type" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "pickupLocationType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=place_of_publication" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "placeOfPublication", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pmid" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "pmid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=preferred_send_method" }),
        __metadata("design:type", GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPreferredSendMethod)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "preferredSendMethod", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=printed" }),
        __metadata("design:type", Boolean)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "printed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publisher" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "publisher", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reading_room" }),
        __metadata("design:type", GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestReadingRoom)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "readingRoom", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=receive_cost" }),
        __metadata("design:type", shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "receiveCost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=remote_record_id" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "remoteRecordId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reported" }),
        __metadata("design:type", Boolean)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "reported", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_cost" }),
        __metadata("design:type", shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "requestCost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "requestId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requested_language" }),
        __metadata("design:type", GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequestedLanguage)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "requestedLanguage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requested_media" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "requestedMedia", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requester" }),
        __metadata("design:type", GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequester)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "requester", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=rs_note", elemType: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRsNote }),
        __metadata("design:type", Array)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "rsNote", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=series_title_number" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "seriesTitleNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shipping_cost" }),
        __metadata("design:type", GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCost)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "shippingCost", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "source", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=specific_edition" }),
        __metadata("design:type", Boolean)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "specificEdition", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_page" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "startPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestStatus)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=supplied_format" }),
        __metadata("design:type", GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestSuppliedFormat)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "suppliedFormat", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text_email" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "textEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text_postal_1" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "textPostal1", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text_postal_2" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "textPostal2", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text_postal_3" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "textPostal3", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=text_postal_4" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "textPostal4", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "title", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=use_alternative_address" }),
        __metadata("design:type", Boolean)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "useAlternativeAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_request" }),
        __metadata("design:type", GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestUserRequest)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "userRequest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=volume" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "volume", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=willing_to_pay" }),
        __metadata("design:type", Boolean)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "willingToPay", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=year" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest.prototype, "year", void 0);
    return GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest = GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest;
// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJson
/**
 * A list of resource sharing requests.
**/
var GetAlmawsV1TaskListsRsLendingRequests200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRsLendingRequests200ApplicationJson, _super);
    function GetAlmawsV1TaskListsRsLendingRequests200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_record_count" }),
        __metadata("design:type", Number)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJson.prototype, "totalRecordCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_resource_sharing_request", elemType: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest }),
        __metadata("design:type", Array)
    ], GetAlmawsV1TaskListsRsLendingRequests200ApplicationJson.prototype, "userResourceSharingRequest", void 0);
    return GetAlmawsV1TaskListsRsLendingRequests200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRsLendingRequests200ApplicationJson = GetAlmawsV1TaskListsRsLendingRequests200ApplicationJson;
var GetAlmawsV1TaskListsRsLendingRequestsRequest = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRsLendingRequestsRequest, _super);
    function GetAlmawsV1TaskListsRsLendingRequestsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAlmawsV1TaskListsRsLendingRequestsQueryParams)
    ], GetAlmawsV1TaskListsRsLendingRequestsRequest.prototype, "queryParams", void 0);
    return GetAlmawsV1TaskListsRsLendingRequestsRequest;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRsLendingRequestsRequest = GetAlmawsV1TaskListsRsLendingRequestsRequest;
var GetAlmawsV1TaskListsRsLendingRequestsResponse = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRsLendingRequestsResponse, _super);
    function GetAlmawsV1TaskListsRsLendingRequestsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetAlmawsV1TaskListsRsLendingRequestsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRsLendingRequestsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAlmawsV1TaskListsRsLendingRequestsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAlmawsV1TaskListsRsLendingRequestsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAlmawsV1TaskListsRsLendingRequests200ApplicationJson)
    ], GetAlmawsV1TaskListsRsLendingRequestsResponse.prototype, "getAlmawsV1TaskListsRsLendingRequests200ApplicationJSONObject", void 0);
    return GetAlmawsV1TaskListsRsLendingRequestsResponse;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRsLendingRequestsResponse = GetAlmawsV1TaskListsRsLendingRequestsResponse;
