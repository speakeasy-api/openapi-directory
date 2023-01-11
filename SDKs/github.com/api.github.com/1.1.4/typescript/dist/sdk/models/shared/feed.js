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
exports.Feed = exports.FeedLinks = void 0;
var utils_1 = require("../../../internal/utils");
var linkwithtype_1 = require("./linkwithtype");
var FeedLinks = /** @class */ (function (_super) {
    __extends(FeedLinks, _super);
    function FeedLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=current_user" }),
        __metadata("design:type", linkwithtype_1.LinkWithType)
    ], FeedLinks.prototype, "currentUser", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=current_user_actor" }),
        __metadata("design:type", linkwithtype_1.LinkWithType)
    ], FeedLinks.prototype, "currentUserActor", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=current_user_organization" }),
        __metadata("design:type", linkwithtype_1.LinkWithType)
    ], FeedLinks.prototype, "currentUserOrganization", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=current_user_organizations", elemType: linkwithtype_1.LinkWithType }),
        __metadata("design:type", Array)
    ], FeedLinks.prototype, "currentUserOrganizations", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=current_user_public" }),
        __metadata("design:type", linkwithtype_1.LinkWithType)
    ], FeedLinks.prototype, "currentUserPublic", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=security_advisories" }),
        __metadata("design:type", linkwithtype_1.LinkWithType)
    ], FeedLinks.prototype, "securityAdvisories", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timeline" }),
        __metadata("design:type", linkwithtype_1.LinkWithType)
    ], FeedLinks.prototype, "timeline", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user" }),
        __metadata("design:type", linkwithtype_1.LinkWithType)
    ], FeedLinks.prototype, "user", void 0);
    return FeedLinks;
}(utils_1.SpeakeasyBase));
exports.FeedLinks = FeedLinks;
// Feed
/**
 * Feed
**/
var Feed = /** @class */ (function (_super) {
    __extends(Feed, _super);
    function Feed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=_links" }),
        __metadata("design:type", FeedLinks)
    ], Feed.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=current_user_actor_url" }),
        __metadata("design:type", String)
    ], Feed.prototype, "currentUserActorUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=current_user_organization_url" }),
        __metadata("design:type", String)
    ], Feed.prototype, "currentUserOrganizationUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=current_user_organization_urls" }),
        __metadata("design:type", Array)
    ], Feed.prototype, "currentUserOrganizationUrls", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=current_user_public_url" }),
        __metadata("design:type", String)
    ], Feed.prototype, "currentUserPublicUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=current_user_url" }),
        __metadata("design:type", String)
    ], Feed.prototype, "currentUserUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=security_advisories_url" }),
        __metadata("design:type", String)
    ], Feed.prototype, "securityAdvisoriesUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timeline_url" }),
        __metadata("design:type", String)
    ], Feed.prototype, "timelineUrl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_url" }),
        __metadata("design:type", String)
    ], Feed.prototype, "userUrl", void 0);
    return Feed;
}(utils_1.SpeakeasyBase));
exports.Feed = Feed;
