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
exports.GetAlmawsV1TaskListsRequestedResourcesResponse = exports.GetAlmawsV1TaskListsRequestedResourcesRequest = exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJson = exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResource = exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata = exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadataMmsId = exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest = exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequester = exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestTypeEnum = exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestSubType = exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestDestination = exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation = exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationLibrary = exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationHoldingId = exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy = exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopyBaseStatus = exports.GetAlmawsV1TaskListsRequestedResourcesQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var GetAlmawsV1TaskListsRequestedResourcesQueryParams = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRequestedResourcesQueryParams, _super);
    function GetAlmawsV1TaskListsRequestedResourcesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=circ_desk" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResourcesQueryParams.prototype, "circDesk", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResourcesQueryParams.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=library" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResourcesQueryParams.prototype, "library", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetAlmawsV1TaskListsRequestedResourcesQueryParams.prototype, "limit", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=location" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResourcesQueryParams.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetAlmawsV1TaskListsRequestedResourcesQueryParams.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=order_by" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResourcesQueryParams.prototype, "orderBy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=pickup_inst" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResourcesQueryParams.prototype, "pickupInst", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=printed" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResourcesQueryParams.prototype, "printed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=reported" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResourcesQueryParams.prototype, "reported", void 0);
    return GetAlmawsV1TaskListsRequestedResourcesQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRequestedResourcesQueryParams = GetAlmawsV1TaskListsRequestedResourcesQueryParams;
var GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopyBaseStatus = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopyBaseStatus, _super);
    function GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopyBaseStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopyBaseStatus.prototype, "desc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopyBaseStatus.prototype, "value", void 0);
    return GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopyBaseStatus;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopyBaseStatus = GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopyBaseStatus;
// GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy
/**
 * Specific copy of resource in a specific location.
**/
var GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy, _super);
    function GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=alternative_call_number" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy.prototype, "alternativeCallNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=barcode" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy.prototype, "barcode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=base_status" }),
        __metadata("design:type", GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopyBaseStatus)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy.prototype, "baseStatus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pid" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy.prototype, "pid", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=storage_location_id" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy.prototype, "storageLocationId", void 0);
    return GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy = GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy;
// GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationHoldingId
/**
 * Holding pid, a unique holding id that the resource is associated with.
**/
var GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationHoldingId = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationHoldingId, _super);
    function GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationHoldingId() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationHoldingId.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationHoldingId.prototype, "value", void 0);
    return GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationHoldingId;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationHoldingId = GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationHoldingId;
// GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationLibrary
/**
 * Library of the requested resource. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).
**/
var GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationLibrary = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationLibrary, _super);
    function GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationLibrary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationLibrary.prototype, "desc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationLibrary.prototype, "value", void 0);
    return GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationLibrary;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationLibrary = GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationLibrary;
// GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation
/**
 * Location of the requested resource.
**/
var GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation, _super);
    function GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=call_number" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation.prototype, "callNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=copy", elemType: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationCopy }),
        __metadata("design:type", Array)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation.prototype, "copy", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=holding_id" }),
        __metadata("design:type", GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationHoldingId)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation.prototype, "holdingId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=library" }),
        __metadata("design:type", GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocationLibrary)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation.prototype, "library", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=shelving_location" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation.prototype, "shelvingLocation", void 0);
    return GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation = GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation;
// GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestDestination
/**
 * The destination will be a library in most cases. However, it may at times be: A circulation desk (when the pickup location is a reading room) A Home/Office code, where the request is for personal delivery A Work Order department
**/
var GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestDestination = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestDestination, _super);
    function GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestDestination() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestDestination.prototype, "desc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestDestination.prototype, "value", void 0);
    return GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestDestination;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestDestination = GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestDestination;
// GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestSubType
/**
 * The sub type of the request.
**/
var GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestSubType = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestSubType, _super);
    function GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestSubType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestSubType.prototype, "desc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestSubType.prototype, "value", void 0);
    return GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestSubType;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestSubType = GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestSubType;
var GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestTypeEnum;
(function (GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestTypeEnum) {
    GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestTypeEnum["Booking"] = "BOOKING";
    GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestTypeEnum["Digitization"] = "DIGITIZATION";
    GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestTypeEnum["Hold"] = "HOLD";
    GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestTypeEnum["Move"] = "MOVE";
    GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestTypeEnum["WorkOrder"] = "WORK_ORDER";
})(GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestTypeEnum = exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestTypeEnum || (exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestTypeEnum = {}));
// GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequester
/**
 * A description of the requester.
**/
var GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequester = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequester, _super);
    function GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequester() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=desc" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequester.prototype, "desc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequester.prototype, "value", void 0);
    return GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequester;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequester = GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequester;
// GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest
/**
 * Request object.
**/
var GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest, _super);
    function GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest.prototype, "comment", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=destination" }),
        __metadata("design:type", GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestDestination)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest.prototype, "destination", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=printed" }),
        __metadata("design:type", Boolean)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest.prototype, "printed", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=reported" }),
        __metadata("design:type", Boolean)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest.prototype, "reported", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_date" }),
        __metadata("design:type", Date)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest.prototype, "requestDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_sub_type" }),
        __metadata("design:type", GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequestSubType)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest.prototype, "requestSubType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_time" }),
        __metadata("design:type", Date)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest.prototype, "requestTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_type" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest.prototype, "requestType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requester" }),
        __metadata("design:type", GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequestRequester)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest.prototype, "requester", void 0);
    return GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest = GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest;
// GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadataMmsId
/**
 * The MMS id of the resource. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e).
**/
var GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadataMmsId = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadataMmsId, _super);
    function GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadataMmsId() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadataMmsId.prototype, "link", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadataMmsId.prototype, "value", void 0);
    return GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadataMmsId;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadataMmsId = GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadataMmsId;
// GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata
/**
 * Metadata about the requested resource.
**/
var GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata, _super);
    function GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=author" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata.prototype, "author", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=isbn" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata.prototype, "isbn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=issn" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata.prototype, "issn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mms_id" }),
        __metadata("design:type", GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadataMmsId)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata.prototype, "mmsId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publication_place" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata.prototype, "publicationPlace", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publication_year" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata.prototype, "publicationYear", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=publisher" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata.prototype, "publisher", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata.prototype, "title", void 0);
    return GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata = GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata;
// GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResource
/**
 * Requested resource to be picked from the shelf.
**/
var GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResource = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResource, _super);
    function GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=location" }),
        __metadata("design:type", GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceLocation)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResource.prototype, "location", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request", elemType: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceRequest }),
        __metadata("design:type", Array)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResource.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resource_metadata" }),
        __metadata("design:type", GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResourceResourceMetadata)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResource.prototype, "resourceMetadata", void 0);
    return GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResource;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResource = GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResource;
// GetAlmawsV1TaskListsRequestedResources200ApplicationJson
/**
 * A list of requested resources.
**/
var GetAlmawsV1TaskListsRequestedResources200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRequestedResources200ApplicationJson, _super);
    function GetAlmawsV1TaskListsRequestedResources200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=requested_resource", elemType: GetAlmawsV1TaskListsRequestedResources200ApplicationJsonRequestedResource }),
        __metadata("design:type", Array)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJson.prototype, "requestedResource", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_record_count" }),
        __metadata("design:type", Number)
    ], GetAlmawsV1TaskListsRequestedResources200ApplicationJson.prototype, "totalRecordCount", void 0);
    return GetAlmawsV1TaskListsRequestedResources200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRequestedResources200ApplicationJson = GetAlmawsV1TaskListsRequestedResources200ApplicationJson;
var GetAlmawsV1TaskListsRequestedResourcesRequest = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRequestedResourcesRequest, _super);
    function GetAlmawsV1TaskListsRequestedResourcesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAlmawsV1TaskListsRequestedResourcesQueryParams)
    ], GetAlmawsV1TaskListsRequestedResourcesRequest.prototype, "queryParams", void 0);
    return GetAlmawsV1TaskListsRequestedResourcesRequest;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRequestedResourcesRequest = GetAlmawsV1TaskListsRequestedResourcesRequest;
var GetAlmawsV1TaskListsRequestedResourcesResponse = /** @class */ (function (_super) {
    __extends(GetAlmawsV1TaskListsRequestedResourcesResponse, _super);
    function GetAlmawsV1TaskListsRequestedResourcesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetAlmawsV1TaskListsRequestedResourcesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetAlmawsV1TaskListsRequestedResourcesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], GetAlmawsV1TaskListsRequestedResourcesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetAlmawsV1TaskListsRequestedResourcesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetAlmawsV1TaskListsRequestedResources200ApplicationJson)
    ], GetAlmawsV1TaskListsRequestedResourcesResponse.prototype, "getAlmawsV1TaskListsRequestedResources200ApplicationJSONObject", void 0);
    return GetAlmawsV1TaskListsRequestedResourcesResponse;
}(utils_1.SpeakeasyBase));
exports.GetAlmawsV1TaskListsRequestedResourcesResponse = GetAlmawsV1TaskListsRequestedResourcesResponse;
