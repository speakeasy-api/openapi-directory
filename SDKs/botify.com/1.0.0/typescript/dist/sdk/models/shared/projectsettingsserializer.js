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
exports.ProjectSettingsSerializer = void 0;
var utils_1 = require("../../../internal/utils");
var ProjectSettingsSerializer = /** @class */ (function (_super) {
    __extends(ProjectSettingsSerializer, _super);
    function ProjectSettingsSerializer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allowed_domains" }),
        __metadata("design:type", Array)
    ], ProjectSettingsSerializer.prototype, "allowedDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=blacklisted_domains" }),
        __metadata("design:type", Array)
    ], ProjectSettingsSerializer.prototype, "blacklistedDomains", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=compare_crawl" }),
        __metadata("design:type", Boolean)
    ], ProjectSettingsSerializer.prototype, "compareCrawl", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=crawl_gzip" }),
        __metadata("design:type", Boolean)
    ], ProjectSettingsSerializer.prototype, "crawlGzip", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extra_headers" }),
        __metadata("design:type", String)
    ], ProjectSettingsSerializer.prototype, "extraHeaders", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=google_analytics_account_email" }),
        __metadata("design:type", String)
    ], ProjectSettingsSerializer.prototype, "googleAnalyticsAccountEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=google_analytics_nb_days" }),
        __metadata("design:type", Number)
    ], ProjectSettingsSerializer.prototype, "googleAnalyticsNbDays", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=google_analytics_site_id" }),
        __metadata("design:type", Number)
    ], ProjectSettingsSerializer.prototype, "googleAnalyticsSiteId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=google_social_auth_id" }),
        __metadata("design:type", Number)
    ], ProjectSettingsSerializer.prototype, "googleSocialAuthId", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=has_robots_txt" }),
        __metadata("design:type", String)
    ], ProjectSettingsSerializer.prototype, "hasRobotsTxt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=header_settings" }),
        __metadata("design:type", Array)
    ], ProjectSettingsSerializer.prototype, "headerSettings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_depth" }),
        __metadata("design:type", Number)
    ], ProjectSettingsSerializer.prototype, "maxDepth", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_nb_pages" }),
        __metadata("design:type", Number)
    ], ProjectSettingsSerializer.prototype, "maxNbPages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=max_pages_per_sec" }),
        __metadata("design:type", Number)
    ], ProjectSettingsSerializer.prototype, "maxPagesPerSec", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=respect_nofollow" }),
        __metadata("design:type", Boolean)
    ], ProjectSettingsSerializer.prototype, "respectNofollow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=sitemaps" }),
        __metadata("design:type", Array)
    ], ProjectSettingsSerializer.prototype, "sitemaps", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start_urls" }),
        __metadata("design:type", Array)
    ], ProjectSettingsSerializer.prototype, "startUrls", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_agent" }),
        __metadata("design:type", String)
    ], ProjectSettingsSerializer.prototype, "userAgent", void 0);
    return ProjectSettingsSerializer;
}(utils_1.SpeakeasyBase));
exports.ProjectSettingsSerializer = ProjectSettingsSerializer;
