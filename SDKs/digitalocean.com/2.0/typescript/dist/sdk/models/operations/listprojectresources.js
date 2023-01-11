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
exports.ListProjectResourcesResponse = exports.ListProjectResourcesRequest = exports.ListProjectResources401ApplicationJson = exports.ListProjectResources200ApplicationJson = exports.ListProjectResources200ApplicationJsonResources = exports.ListProjectResources200ApplicationJsonResourcesStatusEnum = exports.ListProjectResources200ApplicationJsonResourcesLinks = exports.ListProjectResources200ApplicationJsonMeta = exports.ListProjectResources200ApplicationJsonLinks = exports.ListProjectResources200ApplicationJsonLinksPages2 = exports.ListProjectResources200ApplicationJsonLinksPages1 = exports.ListProjectResourcesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListProjectResourcesPathParams = /** @class */ (function (_super) {
    __extends(ListProjectResourcesPathParams, _super);
    function ListProjectResourcesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", String)
    ], ListProjectResourcesPathParams.prototype, "projectId", void 0);
    return ListProjectResourcesPathParams;
}(utils_1.SpeakeasyBase));
exports.ListProjectResourcesPathParams = ListProjectResourcesPathParams;
var ListProjectResources200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListProjectResources200ApplicationJsonLinksPages1, _super);
    function ListProjectResources200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListProjectResources200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListProjectResources200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListProjectResources200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListProjectResources200ApplicationJsonLinksPages1 = ListProjectResources200ApplicationJsonLinksPages1;
var ListProjectResources200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListProjectResources200ApplicationJsonLinksPages2, _super);
    function ListProjectResources200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListProjectResources200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListProjectResources200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListProjectResources200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListProjectResources200ApplicationJsonLinksPages2 = ListProjectResources200ApplicationJsonLinksPages2;
var ListProjectResources200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListProjectResources200ApplicationJsonLinks, _super);
    function ListProjectResources200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListProjectResources200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListProjectResources200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListProjectResources200ApplicationJsonLinks = ListProjectResources200ApplicationJsonLinks;
// ListProjectResources200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListProjectResources200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListProjectResources200ApplicationJsonMeta, _super);
    function ListProjectResources200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListProjectResources200ApplicationJsonMeta.prototype, "total", void 0);
    return ListProjectResources200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListProjectResources200ApplicationJsonMeta = ListProjectResources200ApplicationJsonMeta;
// ListProjectResources200ApplicationJsonResourcesLinks
/**
 * The links object contains the `self` object, which contains the resource relationship.
**/
var ListProjectResources200ApplicationJsonResourcesLinks = /** @class */ (function (_super) {
    __extends(ListProjectResources200ApplicationJsonResourcesLinks, _super);
    function ListProjectResources200ApplicationJsonResourcesLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], ListProjectResources200ApplicationJsonResourcesLinks.prototype, "self", void 0);
    return ListProjectResources200ApplicationJsonResourcesLinks;
}(utils_1.SpeakeasyBase));
exports.ListProjectResources200ApplicationJsonResourcesLinks = ListProjectResources200ApplicationJsonResourcesLinks;
var ListProjectResources200ApplicationJsonResourcesStatusEnum;
(function (ListProjectResources200ApplicationJsonResourcesStatusEnum) {
    ListProjectResources200ApplicationJsonResourcesStatusEnum["Ok"] = "ok";
    ListProjectResources200ApplicationJsonResourcesStatusEnum["NotFound"] = "not_found";
    ListProjectResources200ApplicationJsonResourcesStatusEnum["Assigned"] = "assigned";
    ListProjectResources200ApplicationJsonResourcesStatusEnum["AlreadyAssigned"] = "already_assigned";
    ListProjectResources200ApplicationJsonResourcesStatusEnum["ServiceDown"] = "service_down";
})(ListProjectResources200ApplicationJsonResourcesStatusEnum = exports.ListProjectResources200ApplicationJsonResourcesStatusEnum || (exports.ListProjectResources200ApplicationJsonResourcesStatusEnum = {}));
var ListProjectResources200ApplicationJsonResources = /** @class */ (function (_super) {
    __extends(ListProjectResources200ApplicationJsonResources, _super);
    function ListProjectResources200ApplicationJsonResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=assigned_at" }),
        __metadata("design:type", Date)
    ], ListProjectResources200ApplicationJsonResources.prototype, "assignedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListProjectResources200ApplicationJsonResourcesLinks)
    ], ListProjectResources200ApplicationJsonResources.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ListProjectResources200ApplicationJsonResources.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=urn" }),
        __metadata("design:type", String)
    ], ListProjectResources200ApplicationJsonResources.prototype, "urn", void 0);
    return ListProjectResources200ApplicationJsonResources;
}(utils_1.SpeakeasyBase));
exports.ListProjectResources200ApplicationJsonResources = ListProjectResources200ApplicationJsonResources;
var ListProjectResources200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListProjectResources200ApplicationJson, _super);
    function ListProjectResources200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListProjectResources200ApplicationJsonLinks)
    ], ListProjectResources200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListProjectResources200ApplicationJsonMeta)
    ], ListProjectResources200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=resources", elemType: ListProjectResources200ApplicationJsonResources }),
        __metadata("design:type", Array)
    ], ListProjectResources200ApplicationJson.prototype, "resources", void 0);
    return ListProjectResources200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListProjectResources200ApplicationJson = ListProjectResources200ApplicationJson;
var ListProjectResources401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListProjectResources401ApplicationJson, _super);
    function ListProjectResources401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListProjectResources401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListProjectResources401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListProjectResources401ApplicationJson.prototype, "requestId", void 0);
    return ListProjectResources401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListProjectResources401ApplicationJson = ListProjectResources401ApplicationJson;
var ListProjectResourcesRequest = /** @class */ (function (_super) {
    __extends(ListProjectResourcesRequest, _super);
    function ListProjectResourcesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListProjectResourcesPathParams)
    ], ListProjectResourcesRequest.prototype, "pathParams", void 0);
    return ListProjectResourcesRequest;
}(utils_1.SpeakeasyBase));
exports.ListProjectResourcesRequest = ListProjectResourcesRequest;
var ListProjectResourcesResponse = /** @class */ (function (_super) {
    __extends(ListProjectResourcesResponse, _super);
    function ListProjectResourcesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListProjectResourcesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListProjectResourcesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListProjectResourcesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListProjectResources200ApplicationJson)
    ], ListProjectResourcesResponse.prototype, "listProjectResources200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListProjectResources401ApplicationJson)
    ], ListProjectResourcesResponse.prototype, "listProjectResources401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListProjectResourcesResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListProjectResourcesResponse;
}(utils_1.SpeakeasyBase));
exports.ListProjectResourcesResponse = ListProjectResourcesResponse;
