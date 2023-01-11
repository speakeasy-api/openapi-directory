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
exports.Network = exports.NetworkRelationships = exports.NetworkRelationshipsSeries = exports.NetworkRelationshipsParent = exports.NetworkRelationshipsImages = exports.NetworkRelationshipsCoverImage = exports.NetworkAttributes = void 0;
var utils_1 = require("../../../internal/utils");
var resourceidentifier_1 = require("./resourceidentifier");
var NetworkAttributes = /** @class */ (function (_super) {
    __extends(NetworkAttributes, _super);
    function NetworkAttributes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], NetworkAttributes.prototype, "copyright", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], NetworkAttributes.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], NetworkAttributes.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description_is_html" }),
        __metadata("design:type", Boolean)
    ], NetworkAttributes.prototype, "descriptionIsHtml", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description_plain" }),
        __metadata("design:type", String)
    ], NetworkAttributes.prototype, "descriptionPlain", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=facebook_url" }),
        __metadata("design:type", String)
    ], NetworkAttributes.prototype, "facebookUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=instagram_url" }),
        __metadata("design:type", String)
    ], NetworkAttributes.prototype, "instagramUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=linkedin_url" }),
        __metadata("design:type", String)
    ], NetworkAttributes.prototype, "linkedinUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NetworkAttributes.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=public_email" }),
        __metadata("design:type", String)
    ], NetworkAttributes.prototype, "publicEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=public_page_enabled" }),
        __metadata("design:type", Boolean)
    ], NetworkAttributes.prototype, "publicPageEnabled", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], NetworkAttributes.prototype, "slug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tumblr_url" }),
        __metadata("design:type", String)
    ], NetworkAttributes.prototype, "tumblrUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=twitter_url" }),
        __metadata("design:type", String)
    ], NetworkAttributes.prototype, "twitterUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], NetworkAttributes.prototype, "updatedAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=website_url" }),
        __metadata("design:type", String)
    ], NetworkAttributes.prototype, "websiteUrl", void 0);
    return NetworkAttributes;
}(utils_1.SpeakeasyBase));
exports.NetworkAttributes = NetworkAttributes;
// NetworkRelationshipsCoverImage
/**
 * The cover image for the network
**/
var NetworkRelationshipsCoverImage = /** @class */ (function (_super) {
    __extends(NetworkRelationshipsCoverImage, _super);
    function NetworkRelationshipsCoverImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", resourceidentifier_1.ResourceIdentifier)
    ], NetworkRelationshipsCoverImage.prototype, "data", void 0);
    return NetworkRelationshipsCoverImage;
}(utils_1.SpeakeasyBase));
exports.NetworkRelationshipsCoverImage = NetworkRelationshipsCoverImage;
// NetworkRelationshipsImages
/**
 * A collection of images linked to the network. This currently only includes
 * the cover image for the network.
 *
**/
var NetworkRelationshipsImages = /** @class */ (function (_super) {
    __extends(NetworkRelationshipsImages, _super);
    function NetworkRelationshipsImages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: resourceidentifier_1.ResourceIdentifier }),
        __metadata("design:type", Array)
    ], NetworkRelationshipsImages.prototype, "data", void 0);
    return NetworkRelationshipsImages;
}(utils_1.SpeakeasyBase));
exports.NetworkRelationshipsImages = NetworkRelationshipsImages;
// NetworkRelationshipsParent
/**
 * The parent network of the network
**/
var NetworkRelationshipsParent = /** @class */ (function (_super) {
    __extends(NetworkRelationshipsParent, _super);
    function NetworkRelationshipsParent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data" }),
        __metadata("design:type", resourceidentifier_1.ResourceIdentifier)
    ], NetworkRelationshipsParent.prototype, "data", void 0);
    return NetworkRelationshipsParent;
}(utils_1.SpeakeasyBase));
exports.NetworkRelationshipsParent = NetworkRelationshipsParent;
// NetworkRelationshipsSeries
/**
 * List of series within the network which are accessible to you
**/
var NetworkRelationshipsSeries = /** @class */ (function (_super) {
    __extends(NetworkRelationshipsSeries, _super);
    function NetworkRelationshipsSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=data", elemType: resourceidentifier_1.ResourceIdentifier }),
        __metadata("design:type", Array)
    ], NetworkRelationshipsSeries.prototype, "data", void 0);
    return NetworkRelationshipsSeries;
}(utils_1.SpeakeasyBase));
exports.NetworkRelationshipsSeries = NetworkRelationshipsSeries;
var NetworkRelationships = /** @class */ (function (_super) {
    __extends(NetworkRelationships, _super);
    function NetworkRelationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=cover_image" }),
        __metadata("design:type", NetworkRelationshipsCoverImage)
    ], NetworkRelationships.prototype, "coverImage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=images" }),
        __metadata("design:type", NetworkRelationshipsImages)
    ], NetworkRelationships.prototype, "images", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=parent" }),
        __metadata("design:type", NetworkRelationshipsParent)
    ], NetworkRelationships.prototype, "parent", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=series" }),
        __metadata("design:type", NetworkRelationshipsSeries)
    ], NetworkRelationships.prototype, "series", void 0);
    return NetworkRelationships;
}(utils_1.SpeakeasyBase));
exports.NetworkRelationships = NetworkRelationships;
var Network = /** @class */ (function (_super) {
    __extends(Network, _super);
    function Network() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=attributes" }),
        __metadata("design:type", NetworkAttributes)
    ], Network.prototype, "attributes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Network.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=relationships" }),
        __metadata("design:type", NetworkRelationships)
    ], Network.prototype, "relationships", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Network.prototype, "type", void 0);
    return Network;
}(utils_1.SpeakeasyBase));
exports.Network = Network;
