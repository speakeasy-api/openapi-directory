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
exports.SearchResponse = void 0;
var utils_1 = require("../../../internal/utils");
var bucketinfo_1 = require("./bucketinfo");
var hits_1 = require("./hits");
var fieldstats_1 = require("./fieldstats");
var searchstatus_1 = require("./searchstatus");
// SearchResponse
/**
 * The result of a <code>Search</code> request. Contains the documents that match the specified search criteria and any requested fields, highlights, and facet information.
**/
var SearchResponse = /** @class */ (function (_super) {
    __extends(SearchResponse, _super);
    function SearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=facets", elemType: bucketinfo_1.BucketInfo }),
        __metadata("design:type", Object)
    ], SearchResponse.prototype, "facets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hits" }),
        __metadata("design:type", hits_1.Hits)
    ], SearchResponse.prototype, "hits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=stats", elemType: fieldstats_1.FieldStats }),
        __metadata("design:type", Object)
    ], SearchResponse.prototype, "stats", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", searchstatus_1.SearchStatus)
    ], SearchResponse.prototype, "status", void 0);
    return SearchResponse;
}(utils_1.SpeakeasyBase));
exports.SearchResponse = SearchResponse;
