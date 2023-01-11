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
exports.ListVpcMembersResponse = exports.ListVpcMembersRequest = exports.ListVpcMembers401ApplicationJson = exports.ListVpcMembers200ApplicationJson = exports.ListVpcMembers200ApplicationJsonMeta = exports.ListVpcMembers200ApplicationJsonMembers = exports.ListVpcMembers200ApplicationJsonLinks = exports.ListVpcMembers200ApplicationJsonLinksPages2 = exports.ListVpcMembers200ApplicationJsonLinksPages1 = exports.ListVpcMembersQueryParams = exports.ListVpcMembersPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListVpcMembersPathParams = /** @class */ (function (_super) {
    __extends(ListVpcMembersPathParams, _super);
    function ListVpcMembersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=vpc_id" }),
        __metadata("design:type", String)
    ], ListVpcMembersPathParams.prototype, "vpcId", void 0);
    return ListVpcMembersPathParams;
}(utils_1.SpeakeasyBase));
exports.ListVpcMembersPathParams = ListVpcMembersPathParams;
var ListVpcMembersQueryParams = /** @class */ (function (_super) {
    __extends(ListVpcMembersQueryParams, _super);
    function ListVpcMembersQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListVpcMembersQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListVpcMembersQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=resource_type" }),
        __metadata("design:type", String)
    ], ListVpcMembersQueryParams.prototype, "resourceType", void 0);
    return ListVpcMembersQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListVpcMembersQueryParams = ListVpcMembersQueryParams;
var ListVpcMembers200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListVpcMembers200ApplicationJsonLinksPages1, _super);
    function ListVpcMembers200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListVpcMembers200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListVpcMembers200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListVpcMembers200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListVpcMembers200ApplicationJsonLinksPages1 = ListVpcMembers200ApplicationJsonLinksPages1;
var ListVpcMembers200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListVpcMembers200ApplicationJsonLinksPages2, _super);
    function ListVpcMembers200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListVpcMembers200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListVpcMembers200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListVpcMembers200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListVpcMembers200ApplicationJsonLinksPages2 = ListVpcMembers200ApplicationJsonLinksPages2;
var ListVpcMembers200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListVpcMembers200ApplicationJsonLinks, _super);
    function ListVpcMembers200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListVpcMembers200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListVpcMembers200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListVpcMembers200ApplicationJsonLinks = ListVpcMembers200ApplicationJsonLinks;
var ListVpcMembers200ApplicationJsonMembers = /** @class */ (function (_super) {
    __extends(ListVpcMembers200ApplicationJsonMembers, _super);
    function ListVpcMembers200ApplicationJsonMembers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], ListVpcMembers200ApplicationJsonMembers.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListVpcMembers200ApplicationJsonMembers.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=urn" }),
        __metadata("design:type", String)
    ], ListVpcMembers200ApplicationJsonMembers.prototype, "urn", void 0);
    return ListVpcMembers200ApplicationJsonMembers;
}(utils_1.SpeakeasyBase));
exports.ListVpcMembers200ApplicationJsonMembers = ListVpcMembers200ApplicationJsonMembers;
// ListVpcMembers200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListVpcMembers200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListVpcMembers200ApplicationJsonMeta, _super);
    function ListVpcMembers200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListVpcMembers200ApplicationJsonMeta.prototype, "total", void 0);
    return ListVpcMembers200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListVpcMembers200ApplicationJsonMeta = ListVpcMembers200ApplicationJsonMeta;
var ListVpcMembers200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListVpcMembers200ApplicationJson, _super);
    function ListVpcMembers200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListVpcMembers200ApplicationJsonLinks)
    ], ListVpcMembers200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=members", elemType: ListVpcMembers200ApplicationJsonMembers }),
        __metadata("design:type", Array)
    ], ListVpcMembers200ApplicationJson.prototype, "members", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListVpcMembers200ApplicationJsonMeta)
    ], ListVpcMembers200ApplicationJson.prototype, "meta", void 0);
    return ListVpcMembers200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListVpcMembers200ApplicationJson = ListVpcMembers200ApplicationJson;
var ListVpcMembers401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListVpcMembers401ApplicationJson, _super);
    function ListVpcMembers401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListVpcMembers401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListVpcMembers401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListVpcMembers401ApplicationJson.prototype, "requestId", void 0);
    return ListVpcMembers401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListVpcMembers401ApplicationJson = ListVpcMembers401ApplicationJson;
var ListVpcMembersRequest = /** @class */ (function (_super) {
    __extends(ListVpcMembersRequest, _super);
    function ListVpcMembersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListVpcMembersPathParams)
    ], ListVpcMembersRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListVpcMembersQueryParams)
    ], ListVpcMembersRequest.prototype, "queryParams", void 0);
    return ListVpcMembersRequest;
}(utils_1.SpeakeasyBase));
exports.ListVpcMembersRequest = ListVpcMembersRequest;
var ListVpcMembersResponse = /** @class */ (function (_super) {
    __extends(ListVpcMembersResponse, _super);
    function ListVpcMembersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListVpcMembersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListVpcMembersResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListVpcMembersResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListVpcMembers200ApplicationJson)
    ], ListVpcMembersResponse.prototype, "listVpcMembers200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListVpcMembers401ApplicationJson)
    ], ListVpcMembersResponse.prototype, "listVpcMembers401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListVpcMembersResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListVpcMembersResponse;
}(utils_1.SpeakeasyBase));
exports.ListVpcMembersResponse = ListVpcMembersResponse;
