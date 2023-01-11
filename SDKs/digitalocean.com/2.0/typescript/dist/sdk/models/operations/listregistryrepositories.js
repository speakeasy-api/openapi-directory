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
exports.ListRegistryRepositoriesResponse = exports.ListRegistryRepositoriesRequest = exports.ListRegistryRepositories401ApplicationJson = exports.ListRegistryRepositories200ApplicationJson = exports.ListRegistryRepositories200ApplicationJsonRepositories = exports.ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag = exports.ListRegistryRepositories200ApplicationJsonMeta = exports.ListRegistryRepositories200ApplicationJsonLinks = exports.ListRegistryRepositories200ApplicationJsonLinksPages2 = exports.ListRegistryRepositories200ApplicationJsonLinksPages1 = exports.ListRegistryRepositoriesQueryParams = exports.ListRegistryRepositoriesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListRegistryRepositoriesPathParams = /** @class */ (function (_super) {
    __extends(ListRegistryRepositoriesPathParams, _super);
    function ListRegistryRepositoriesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=registry_name" }),
        __metadata("design:type", String)
    ], ListRegistryRepositoriesPathParams.prototype, "registryName", void 0);
    return ListRegistryRepositoriesPathParams;
}(utils_1.SpeakeasyBase));
exports.ListRegistryRepositoriesPathParams = ListRegistryRepositoriesPathParams;
var ListRegistryRepositoriesQueryParams = /** @class */ (function (_super) {
    __extends(ListRegistryRepositoriesQueryParams, _super);
    function ListRegistryRepositoriesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListRegistryRepositoriesQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListRegistryRepositoriesQueryParams.prototype, "perPage", void 0);
    return ListRegistryRepositoriesQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListRegistryRepositoriesQueryParams = ListRegistryRepositoriesQueryParams;
var ListRegistryRepositories200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListRegistryRepositories200ApplicationJsonLinksPages1, _super);
    function ListRegistryRepositories200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListRegistryRepositories200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListRegistryRepositories200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListRegistryRepositories200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListRegistryRepositories200ApplicationJsonLinksPages1 = ListRegistryRepositories200ApplicationJsonLinksPages1;
var ListRegistryRepositories200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListRegistryRepositories200ApplicationJsonLinksPages2, _super);
    function ListRegistryRepositories200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListRegistryRepositories200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListRegistryRepositories200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListRegistryRepositories200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListRegistryRepositories200ApplicationJsonLinksPages2 = ListRegistryRepositories200ApplicationJsonLinksPages2;
var ListRegistryRepositories200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListRegistryRepositories200ApplicationJsonLinks, _super);
    function ListRegistryRepositories200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListRegistryRepositories200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListRegistryRepositories200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListRegistryRepositories200ApplicationJsonLinks = ListRegistryRepositories200ApplicationJsonLinks;
// ListRegistryRepositories200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListRegistryRepositories200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListRegistryRepositories200ApplicationJsonMeta, _super);
    function ListRegistryRepositories200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListRegistryRepositories200ApplicationJsonMeta.prototype, "total", void 0);
    return ListRegistryRepositories200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListRegistryRepositories200ApplicationJsonMeta = ListRegistryRepositories200ApplicationJsonMeta;
var ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag = /** @class */ (function (_super) {
    __extends(ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag, _super);
    function ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=compressed_size_bytes" }),
        __metadata("design:type", Number)
    ], ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag.prototype, "compressedSizeBytes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=manifest_digest" }),
        __metadata("design:type", String)
    ], ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag.prototype, "manifestDigest", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registry_name" }),
        __metadata("design:type", String)
    ], ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag.prototype, "registryName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repository_name" }),
        __metadata("design:type", String)
    ], ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag.prototype, "repositoryName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size_bytes" }),
        __metadata("design:type", Number)
    ], ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag.prototype, "sizeBytes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag" }),
        __metadata("design:type", String)
    ], ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag.prototype, "tag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag.prototype, "updatedAt", void 0);
    return ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag;
}(utils_1.SpeakeasyBase));
exports.ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag = ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag;
var ListRegistryRepositories200ApplicationJsonRepositories = /** @class */ (function (_super) {
    __extends(ListRegistryRepositories200ApplicationJsonRepositories, _super);
    function ListRegistryRepositories200ApplicationJsonRepositories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=latest_tag" }),
        __metadata("design:type", ListRegistryRepositories200ApplicationJsonRepositoriesLatestTag)
    ], ListRegistryRepositories200ApplicationJsonRepositories.prototype, "latestTag", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListRegistryRepositories200ApplicationJsonRepositories.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=registry_name" }),
        __metadata("design:type", String)
    ], ListRegistryRepositories200ApplicationJsonRepositories.prototype, "registryName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tag_count" }),
        __metadata("design:type", Number)
    ], ListRegistryRepositories200ApplicationJsonRepositories.prototype, "tagCount", void 0);
    return ListRegistryRepositories200ApplicationJsonRepositories;
}(utils_1.SpeakeasyBase));
exports.ListRegistryRepositories200ApplicationJsonRepositories = ListRegistryRepositories200ApplicationJsonRepositories;
var ListRegistryRepositories200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListRegistryRepositories200ApplicationJson, _super);
    function ListRegistryRepositories200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListRegistryRepositories200ApplicationJsonLinks)
    ], ListRegistryRepositories200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListRegistryRepositories200ApplicationJsonMeta)
    ], ListRegistryRepositories200ApplicationJson.prototype, "meta", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=repositories", elemType: ListRegistryRepositories200ApplicationJsonRepositories }),
        __metadata("design:type", Array)
    ], ListRegistryRepositories200ApplicationJson.prototype, "repositories", void 0);
    return ListRegistryRepositories200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListRegistryRepositories200ApplicationJson = ListRegistryRepositories200ApplicationJson;
var ListRegistryRepositories401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListRegistryRepositories401ApplicationJson, _super);
    function ListRegistryRepositories401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListRegistryRepositories401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListRegistryRepositories401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListRegistryRepositories401ApplicationJson.prototype, "requestId", void 0);
    return ListRegistryRepositories401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListRegistryRepositories401ApplicationJson = ListRegistryRepositories401ApplicationJson;
var ListRegistryRepositoriesRequest = /** @class */ (function (_super) {
    __extends(ListRegistryRepositoriesRequest, _super);
    function ListRegistryRepositoriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListRegistryRepositoriesPathParams)
    ], ListRegistryRepositoriesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListRegistryRepositoriesQueryParams)
    ], ListRegistryRepositoriesRequest.prototype, "queryParams", void 0);
    return ListRegistryRepositoriesRequest;
}(utils_1.SpeakeasyBase));
exports.ListRegistryRepositoriesRequest = ListRegistryRepositoriesRequest;
var ListRegistryRepositoriesResponse = /** @class */ (function (_super) {
    __extends(ListRegistryRepositoriesResponse, _super);
    function ListRegistryRepositoriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListRegistryRepositoriesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListRegistryRepositoriesResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListRegistryRepositoriesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListRegistryRepositories200ApplicationJson)
    ], ListRegistryRepositoriesResponse.prototype, "listRegistryRepositories200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListRegistryRepositories401ApplicationJson)
    ], ListRegistryRepositoriesResponse.prototype, "listRegistryRepositories401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListRegistryRepositoriesResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListRegistryRepositoriesResponse;
}(utils_1.SpeakeasyBase));
exports.ListRegistryRepositoriesResponse = ListRegistryRepositoriesResponse;
