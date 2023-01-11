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
exports.ListAllDropletsResponse = exports.ListAllDropletsRequest = exports.ListAllDroplets401ApplicationJson = exports.ListAllDroplets200ApplicationJson = exports.ListAllDroplets200ApplicationJsonMeta = exports.ListAllDroplets200ApplicationJsonLinks = exports.ListAllDroplets200ApplicationJsonLinksPages2 = exports.ListAllDroplets200ApplicationJsonLinksPages1 = exports.ListAllDroplets200ApplicationJsonDroplets = exports.ListAllDroplets200ApplicationJsonDropletsStatusEnum = exports.ListAllDroplets200ApplicationJsonDropletsSize = exports.ListAllDroplets200ApplicationJsonDropletsNextBackupWindow = exports.ListAllDroplets200ApplicationJsonDropletsNetworks = exports.ListAllDroplets200ApplicationJsonDropletsNetworksV6 = exports.ListAllDroplets200ApplicationJsonDropletsNetworksV6TypeEnum = exports.ListAllDroplets200ApplicationJsonDropletsNetworksV4 = exports.ListAllDroplets200ApplicationJsonDropletsNetworksV4TypeEnum = exports.ListAllDroplets200ApplicationJsonDropletsKernel = exports.ListAllDroplets200ApplicationJsonDropletsImage = exports.ListAllDroplets200ApplicationJsonDropletsImageTypeEnum = exports.ListAllDroplets200ApplicationJsonDropletsImageStatusEnum = exports.ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum = exports.ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum = exports.ListAllDropletsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListAllDropletsQueryParams = /** @class */ (function (_super) {
    __extends(ListAllDropletsQueryParams, _super);
    function ListAllDropletsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ListAllDropletsQueryParams.prototype, "page", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=per_page" }),
        __metadata("design:type", Number)
    ], ListAllDropletsQueryParams.prototype, "perPage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=tag_name" }),
        __metadata("design:type", String)
    ], ListAllDropletsQueryParams.prototype, "tagName", void 0);
    return ListAllDropletsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListAllDropletsQueryParams = ListAllDropletsQueryParams;
var ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum;
(function (ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum) {
    ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum["ArchLinux"] = "Arch Linux";
    ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum["CentOs"] = "CentOS";
    ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum["CoreOs"] = "CoreOS";
    ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum["Debian"] = "Debian";
    ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum["Fedora"] = "Fedora";
    ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum["FedoraAtomic"] = "Fedora Atomic";
    ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum["FreeBsd"] = "FreeBSD";
    ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum["Gentoo"] = "Gentoo";
    ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum["OpenSuse"] = "openSUSE";
    ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum["RancherOs"] = "RancherOS";
    ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum["Ubuntu"] = "Ubuntu";
    ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum["Unknown"] = "Unknown";
})(ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum = exports.ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum || (exports.ListAllDroplets200ApplicationJsonDropletsImageDistributionEnum = {}));
var ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum;
(function (ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum) {
    ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum["Ams1"] = "ams1";
    ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum["Ams2"] = "ams2";
    ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum["Ams3"] = "ams3";
    ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum["Blr1"] = "blr1";
    ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum["Fra1"] = "fra1";
    ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum["Lon1"] = "lon1";
    ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum["Nyc1"] = "nyc1";
    ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum["Nyc2"] = "nyc2";
    ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum["Nyc3"] = "nyc3";
    ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum["Sfo1"] = "sfo1";
    ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum["Sfo2"] = "sfo2";
    ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum["Sfo3"] = "sfo3";
    ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum["Sgp1"] = "sgp1";
    ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum["Tor1"] = "tor1";
})(ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum = exports.ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum || (exports.ListAllDroplets200ApplicationJsonDropletsImageRegionsEnum = {}));
var ListAllDroplets200ApplicationJsonDropletsImageStatusEnum;
(function (ListAllDroplets200ApplicationJsonDropletsImageStatusEnum) {
    ListAllDroplets200ApplicationJsonDropletsImageStatusEnum["NewUpper"] = "NEW";
    ListAllDroplets200ApplicationJsonDropletsImageStatusEnum["NewLower"] = "new";
    ListAllDroplets200ApplicationJsonDropletsImageStatusEnum["Available"] = "available";
    ListAllDroplets200ApplicationJsonDropletsImageStatusEnum["Pending"] = "pending";
    ListAllDroplets200ApplicationJsonDropletsImageStatusEnum["Deleted"] = "deleted";
    ListAllDroplets200ApplicationJsonDropletsImageStatusEnum["Retired"] = "retired";
})(ListAllDroplets200ApplicationJsonDropletsImageStatusEnum = exports.ListAllDroplets200ApplicationJsonDropletsImageStatusEnum || (exports.ListAllDroplets200ApplicationJsonDropletsImageStatusEnum = {}));
var ListAllDroplets200ApplicationJsonDropletsImageTypeEnum;
(function (ListAllDroplets200ApplicationJsonDropletsImageTypeEnum) {
    ListAllDroplets200ApplicationJsonDropletsImageTypeEnum["Base"] = "base";
    ListAllDroplets200ApplicationJsonDropletsImageTypeEnum["Snapshot"] = "snapshot";
    ListAllDroplets200ApplicationJsonDropletsImageTypeEnum["Backup"] = "backup";
    ListAllDroplets200ApplicationJsonDropletsImageTypeEnum["Custom"] = "custom";
})(ListAllDroplets200ApplicationJsonDropletsImageTypeEnum = exports.ListAllDroplets200ApplicationJsonDropletsImageTypeEnum || (exports.ListAllDroplets200ApplicationJsonDropletsImageTypeEnum = {}));
var ListAllDroplets200ApplicationJsonDropletsImage = /** @class */ (function (_super) {
    __extends(ListAllDroplets200ApplicationJsonDropletsImage, _super);
    function ListAllDroplets200ApplicationJsonDropletsImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], ListAllDroplets200ApplicationJsonDropletsImage.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ListAllDroplets200ApplicationJsonDropletsImage.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=distribution" }),
        __metadata("design:type", String)
    ], ListAllDroplets200ApplicationJsonDropletsImage.prototype, "distribution", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=error_message" }),
        __metadata("design:type", String)
    ], ListAllDroplets200ApplicationJsonDropletsImage.prototype, "errorMessage", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ListAllDroplets200ApplicationJsonDropletsImage.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=min_disk_size" }),
        __metadata("design:type", Number)
    ], ListAllDroplets200ApplicationJsonDropletsImage.prototype, "minDiskSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListAllDroplets200ApplicationJsonDropletsImage.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=public" }),
        __metadata("design:type", Boolean)
    ], ListAllDroplets200ApplicationJsonDropletsImage.prototype, "public", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=regions" }),
        __metadata("design:type", Array)
    ], ListAllDroplets200ApplicationJsonDropletsImage.prototype, "regions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size_gigabytes" }),
        __metadata("design:type", Number)
    ], ListAllDroplets200ApplicationJsonDropletsImage.prototype, "sizeGigabytes", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], ListAllDroplets200ApplicationJsonDropletsImage.prototype, "slug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ListAllDroplets200ApplicationJsonDropletsImage.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], ListAllDroplets200ApplicationJsonDropletsImage.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ListAllDroplets200ApplicationJsonDropletsImage.prototype, "type", void 0);
    return ListAllDroplets200ApplicationJsonDropletsImage;
}(utils_1.SpeakeasyBase));
exports.ListAllDroplets200ApplicationJsonDropletsImage = ListAllDroplets200ApplicationJsonDropletsImage;
// ListAllDroplets200ApplicationJsonDropletsKernel
/**
 * **Note**: All Droplets created after March 2017 use internal kernels by default.
 * These Droplets will have this attribute set to `null`.
 *
 * The current [kernel](https://www.digitalocean.com/docs/droplets/how-to/kernel/)
 * for Droplets with externally managed kernels. This will initially be set to
 * the kernel of the base image when the Droplet is created.
 *
**/
var ListAllDroplets200ApplicationJsonDropletsKernel = /** @class */ (function (_super) {
    __extends(ListAllDroplets200ApplicationJsonDropletsKernel, _super);
    function ListAllDroplets200ApplicationJsonDropletsKernel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ListAllDroplets200ApplicationJsonDropletsKernel.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListAllDroplets200ApplicationJsonDropletsKernel.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], ListAllDroplets200ApplicationJsonDropletsKernel.prototype, "version", void 0);
    return ListAllDroplets200ApplicationJsonDropletsKernel;
}(utils_1.SpeakeasyBase));
exports.ListAllDroplets200ApplicationJsonDropletsKernel = ListAllDroplets200ApplicationJsonDropletsKernel;
var ListAllDroplets200ApplicationJsonDropletsNetworksV4TypeEnum;
(function (ListAllDroplets200ApplicationJsonDropletsNetworksV4TypeEnum) {
    ListAllDroplets200ApplicationJsonDropletsNetworksV4TypeEnum["Public"] = "public";
    ListAllDroplets200ApplicationJsonDropletsNetworksV4TypeEnum["Private"] = "private";
})(ListAllDroplets200ApplicationJsonDropletsNetworksV4TypeEnum = exports.ListAllDroplets200ApplicationJsonDropletsNetworksV4TypeEnum || (exports.ListAllDroplets200ApplicationJsonDropletsNetworksV4TypeEnum = {}));
var ListAllDroplets200ApplicationJsonDropletsNetworksV4 = /** @class */ (function (_super) {
    __extends(ListAllDroplets200ApplicationJsonDropletsNetworksV4, _super);
    function ListAllDroplets200ApplicationJsonDropletsNetworksV4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gateway" }),
        __metadata("design:type", String)
    ], ListAllDroplets200ApplicationJsonDropletsNetworksV4.prototype, "gateway", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_address" }),
        __metadata("design:type", String)
    ], ListAllDroplets200ApplicationJsonDropletsNetworksV4.prototype, "ipAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=netmask" }),
        __metadata("design:type", String)
    ], ListAllDroplets200ApplicationJsonDropletsNetworksV4.prototype, "netmask", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ListAllDroplets200ApplicationJsonDropletsNetworksV4.prototype, "type", void 0);
    return ListAllDroplets200ApplicationJsonDropletsNetworksV4;
}(utils_1.SpeakeasyBase));
exports.ListAllDroplets200ApplicationJsonDropletsNetworksV4 = ListAllDroplets200ApplicationJsonDropletsNetworksV4;
var ListAllDroplets200ApplicationJsonDropletsNetworksV6TypeEnum;
(function (ListAllDroplets200ApplicationJsonDropletsNetworksV6TypeEnum) {
    ListAllDroplets200ApplicationJsonDropletsNetworksV6TypeEnum["Public"] = "public";
})(ListAllDroplets200ApplicationJsonDropletsNetworksV6TypeEnum = exports.ListAllDroplets200ApplicationJsonDropletsNetworksV6TypeEnum || (exports.ListAllDroplets200ApplicationJsonDropletsNetworksV6TypeEnum = {}));
var ListAllDroplets200ApplicationJsonDropletsNetworksV6 = /** @class */ (function (_super) {
    __extends(ListAllDroplets200ApplicationJsonDropletsNetworksV6, _super);
    function ListAllDroplets200ApplicationJsonDropletsNetworksV6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=gateway" }),
        __metadata("design:type", String)
    ], ListAllDroplets200ApplicationJsonDropletsNetworksV6.prototype, "gateway", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ip_address" }),
        __metadata("design:type", String)
    ], ListAllDroplets200ApplicationJsonDropletsNetworksV6.prototype, "ipAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=netmask" }),
        __metadata("design:type", Number)
    ], ListAllDroplets200ApplicationJsonDropletsNetworksV6.prototype, "netmask", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ListAllDroplets200ApplicationJsonDropletsNetworksV6.prototype, "type", void 0);
    return ListAllDroplets200ApplicationJsonDropletsNetworksV6;
}(utils_1.SpeakeasyBase));
exports.ListAllDroplets200ApplicationJsonDropletsNetworksV6 = ListAllDroplets200ApplicationJsonDropletsNetworksV6;
// ListAllDroplets200ApplicationJsonDropletsNetworks
/**
 * The details of the network that are configured for the Droplet instance.  This is an object that contains keys for IPv4 and IPv6.  The value of each of these is an array that contains objects describing an individual IP resource allocated to the Droplet.  These will define attributes like the IP address, netmask, and gateway of the specific network depending on the type of network it is.
**/
var ListAllDroplets200ApplicationJsonDropletsNetworks = /** @class */ (function (_super) {
    __extends(ListAllDroplets200ApplicationJsonDropletsNetworks, _super);
    function ListAllDroplets200ApplicationJsonDropletsNetworks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=v4", elemType: ListAllDroplets200ApplicationJsonDropletsNetworksV4 }),
        __metadata("design:type", Array)
    ], ListAllDroplets200ApplicationJsonDropletsNetworks.prototype, "v4", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=v6", elemType: ListAllDroplets200ApplicationJsonDropletsNetworksV6 }),
        __metadata("design:type", Array)
    ], ListAllDroplets200ApplicationJsonDropletsNetworks.prototype, "v6", void 0);
    return ListAllDroplets200ApplicationJsonDropletsNetworks;
}(utils_1.SpeakeasyBase));
exports.ListAllDroplets200ApplicationJsonDropletsNetworks = ListAllDroplets200ApplicationJsonDropletsNetworks;
// ListAllDroplets200ApplicationJsonDropletsNextBackupWindow
/**
 * The details of the Droplet's backups feature, if backups are configured for the Droplet. This object contains keys for the start and end times of the window during which the backup will start.
**/
var ListAllDroplets200ApplicationJsonDropletsNextBackupWindow = /** @class */ (function (_super) {
    __extends(ListAllDroplets200ApplicationJsonDropletsNextBackupWindow, _super);
    function ListAllDroplets200ApplicationJsonDropletsNextBackupWindow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=end" }),
        __metadata("design:type", Date)
    ], ListAllDroplets200ApplicationJsonDropletsNextBackupWindow.prototype, "end", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=start" }),
        __metadata("design:type", Date)
    ], ListAllDroplets200ApplicationJsonDropletsNextBackupWindow.prototype, "start", void 0);
    return ListAllDroplets200ApplicationJsonDropletsNextBackupWindow;
}(utils_1.SpeakeasyBase));
exports.ListAllDroplets200ApplicationJsonDropletsNextBackupWindow = ListAllDroplets200ApplicationJsonDropletsNextBackupWindow;
var ListAllDroplets200ApplicationJsonDropletsSize = /** @class */ (function (_super) {
    __extends(ListAllDroplets200ApplicationJsonDropletsSize, _super);
    function ListAllDroplets200ApplicationJsonDropletsSize() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=available" }),
        __metadata("design:type", Boolean)
    ], ListAllDroplets200ApplicationJsonDropletsSize.prototype, "available", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ListAllDroplets200ApplicationJsonDropletsSize.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disk" }),
        __metadata("design:type", Number)
    ], ListAllDroplets200ApplicationJsonDropletsSize.prototype, "disk", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=memory" }),
        __metadata("design:type", Number)
    ], ListAllDroplets200ApplicationJsonDropletsSize.prototype, "memory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price_hourly" }),
        __metadata("design:type", Number)
    ], ListAllDroplets200ApplicationJsonDropletsSize.prototype, "priceHourly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=price_monthly" }),
        __metadata("design:type", Number)
    ], ListAllDroplets200ApplicationJsonDropletsSize.prototype, "priceMonthly", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=regions" }),
        __metadata("design:type", Array)
    ], ListAllDroplets200ApplicationJsonDropletsSize.prototype, "regions", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=slug" }),
        __metadata("design:type", String)
    ], ListAllDroplets200ApplicationJsonDropletsSize.prototype, "slug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transfer" }),
        __metadata("design:type", Number)
    ], ListAllDroplets200ApplicationJsonDropletsSize.prototype, "transfer", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vcpus" }),
        __metadata("design:type", Number)
    ], ListAllDroplets200ApplicationJsonDropletsSize.prototype, "vcpus", void 0);
    return ListAllDroplets200ApplicationJsonDropletsSize;
}(utils_1.SpeakeasyBase));
exports.ListAllDroplets200ApplicationJsonDropletsSize = ListAllDroplets200ApplicationJsonDropletsSize;
var ListAllDroplets200ApplicationJsonDropletsStatusEnum;
(function (ListAllDroplets200ApplicationJsonDropletsStatusEnum) {
    ListAllDroplets200ApplicationJsonDropletsStatusEnum["New"] = "new";
    ListAllDroplets200ApplicationJsonDropletsStatusEnum["Active"] = "active";
    ListAllDroplets200ApplicationJsonDropletsStatusEnum["Off"] = "off";
    ListAllDroplets200ApplicationJsonDropletsStatusEnum["Archive"] = "archive";
})(ListAllDroplets200ApplicationJsonDropletsStatusEnum = exports.ListAllDroplets200ApplicationJsonDropletsStatusEnum || (exports.ListAllDroplets200ApplicationJsonDropletsStatusEnum = {}));
var ListAllDroplets200ApplicationJsonDroplets = /** @class */ (function (_super) {
    __extends(ListAllDroplets200ApplicationJsonDroplets, _super);
    function ListAllDroplets200ApplicationJsonDroplets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=backup_ids" }),
        __metadata("design:type", Array)
    ], ListAllDroplets200ApplicationJsonDroplets.prototype, "backupIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], ListAllDroplets200ApplicationJsonDroplets.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=disk" }),
        __metadata("design:type", Number)
    ], ListAllDroplets200ApplicationJsonDroplets.prototype, "disk", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=features" }),
        __metadata("design:type", Array)
    ], ListAllDroplets200ApplicationJsonDroplets.prototype, "features", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], ListAllDroplets200ApplicationJsonDroplets.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=image" }),
        __metadata("design:type", ListAllDroplets200ApplicationJsonDropletsImage)
    ], ListAllDroplets200ApplicationJsonDroplets.prototype, "image", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=kernel" }),
        __metadata("design:type", ListAllDroplets200ApplicationJsonDropletsKernel)
    ], ListAllDroplets200ApplicationJsonDroplets.prototype, "kernel", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=locked" }),
        __metadata("design:type", Boolean)
    ], ListAllDroplets200ApplicationJsonDroplets.prototype, "locked", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=memory" }),
        __metadata("design:type", Number)
    ], ListAllDroplets200ApplicationJsonDroplets.prototype, "memory", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListAllDroplets200ApplicationJsonDroplets.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=networks" }),
        __metadata("design:type", ListAllDroplets200ApplicationJsonDropletsNetworks)
    ], ListAllDroplets200ApplicationJsonDroplets.prototype, "networks", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_backup_window" }),
        __metadata("design:type", ListAllDroplets200ApplicationJsonDropletsNextBackupWindow)
    ], ListAllDroplets200ApplicationJsonDroplets.prototype, "nextBackupWindow", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=region" }),
        __metadata("design:type", shared.Onev21actionsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesActionsItemsPropertiesRegion)
    ], ListAllDroplets200ApplicationJsonDroplets.prototype, "region", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size" }),
        __metadata("design:type", ListAllDroplets200ApplicationJsonDropletsSize)
    ], ListAllDroplets200ApplicationJsonDroplets.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=size_slug" }),
        __metadata("design:type", String)
    ], ListAllDroplets200ApplicationJsonDroplets.prototype, "sizeSlug", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=snapshot_ids" }),
        __metadata("design:type", Array)
    ], ListAllDroplets200ApplicationJsonDroplets.prototype, "snapshotIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ListAllDroplets200ApplicationJsonDroplets.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], ListAllDroplets200ApplicationJsonDroplets.prototype, "tags", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vcpus" }),
        __metadata("design:type", Number)
    ], ListAllDroplets200ApplicationJsonDroplets.prototype, "vcpus", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=volume_ids" }),
        __metadata("design:type", Array)
    ], ListAllDroplets200ApplicationJsonDroplets.prototype, "volumeIds", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=vpc_uuid" }),
        __metadata("design:type", String)
    ], ListAllDroplets200ApplicationJsonDroplets.prototype, "vpcUuid", void 0);
    return ListAllDroplets200ApplicationJsonDroplets;
}(utils_1.SpeakeasyBase));
exports.ListAllDroplets200ApplicationJsonDroplets = ListAllDroplets200ApplicationJsonDroplets;
var ListAllDroplets200ApplicationJsonLinksPages1 = /** @class */ (function (_super) {
    __extends(ListAllDroplets200ApplicationJsonLinksPages1, _super);
    function ListAllDroplets200ApplicationJsonLinksPages1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last" }),
        __metadata("design:type", String)
    ], ListAllDroplets200ApplicationJsonLinksPages1.prototype, "last", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next" }),
        __metadata("design:type", String)
    ], ListAllDroplets200ApplicationJsonLinksPages1.prototype, "next", void 0);
    return ListAllDroplets200ApplicationJsonLinksPages1;
}(utils_1.SpeakeasyBase));
exports.ListAllDroplets200ApplicationJsonLinksPages1 = ListAllDroplets200ApplicationJsonLinksPages1;
var ListAllDroplets200ApplicationJsonLinksPages2 = /** @class */ (function (_super) {
    __extends(ListAllDroplets200ApplicationJsonLinksPages2, _super);
    function ListAllDroplets200ApplicationJsonLinksPages2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first" }),
        __metadata("design:type", String)
    ], ListAllDroplets200ApplicationJsonLinksPages2.prototype, "first", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=prev" }),
        __metadata("design:type", String)
    ], ListAllDroplets200ApplicationJsonLinksPages2.prototype, "prev", void 0);
    return ListAllDroplets200ApplicationJsonLinksPages2;
}(utils_1.SpeakeasyBase));
exports.ListAllDroplets200ApplicationJsonLinksPages2 = ListAllDroplets200ApplicationJsonLinksPages2;
var ListAllDroplets200ApplicationJsonLinks = /** @class */ (function (_super) {
    __extends(ListAllDroplets200ApplicationJsonLinks, _super);
    function ListAllDroplets200ApplicationJsonLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pages" }),
        __metadata("design:type", Object)
    ], ListAllDroplets200ApplicationJsonLinks.prototype, "pages", void 0);
    return ListAllDroplets200ApplicationJsonLinks;
}(utils_1.SpeakeasyBase));
exports.ListAllDroplets200ApplicationJsonLinks = ListAllDroplets200ApplicationJsonLinks;
// ListAllDroplets200ApplicationJsonMeta
/**
 * Information about the response itself.
**/
var ListAllDroplets200ApplicationJsonMeta = /** @class */ (function (_super) {
    __extends(ListAllDroplets200ApplicationJsonMeta, _super);
    function ListAllDroplets200ApplicationJsonMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], ListAllDroplets200ApplicationJsonMeta.prototype, "total", void 0);
    return ListAllDroplets200ApplicationJsonMeta;
}(utils_1.SpeakeasyBase));
exports.ListAllDroplets200ApplicationJsonMeta = ListAllDroplets200ApplicationJsonMeta;
var ListAllDroplets200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllDroplets200ApplicationJson, _super);
    function ListAllDroplets200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=droplets", elemType: ListAllDroplets200ApplicationJsonDroplets }),
        __metadata("design:type", Array)
    ], ListAllDroplets200ApplicationJson.prototype, "droplets", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=links" }),
        __metadata("design:type", ListAllDroplets200ApplicationJsonLinks)
    ], ListAllDroplets200ApplicationJson.prototype, "links", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meta" }),
        __metadata("design:type", ListAllDroplets200ApplicationJsonMeta)
    ], ListAllDroplets200ApplicationJson.prototype, "meta", void 0);
    return ListAllDroplets200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllDroplets200ApplicationJson = ListAllDroplets200ApplicationJson;
var ListAllDroplets401ApplicationJson = /** @class */ (function (_super) {
    __extends(ListAllDroplets401ApplicationJson, _super);
    function ListAllDroplets401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListAllDroplets401ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ListAllDroplets401ApplicationJson.prototype, "message", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=request_id" }),
        __metadata("design:type", String)
    ], ListAllDroplets401ApplicationJson.prototype, "requestId", void 0);
    return ListAllDroplets401ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListAllDroplets401ApplicationJson = ListAllDroplets401ApplicationJson;
var ListAllDropletsRequest = /** @class */ (function (_super) {
    __extends(ListAllDropletsRequest, _super);
    function ListAllDropletsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllDropletsQueryParams)
    ], ListAllDropletsRequest.prototype, "queryParams", void 0);
    return ListAllDropletsRequest;
}(utils_1.SpeakeasyBase));
exports.ListAllDropletsRequest = ListAllDropletsRequest;
var ListAllDropletsResponse = /** @class */ (function (_super) {
    __extends(ListAllDropletsResponse, _super);
    function ListAllDropletsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListAllDropletsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], ListAllDropletsResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListAllDropletsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllDroplets200ApplicationJson)
    ], ListAllDropletsResponse.prototype, "listAllDroplets200ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListAllDroplets401ApplicationJson)
    ], ListAllDropletsResponse.prototype, "listAllDroplets401ApplicationJSONObject", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema)
    ], ListAllDropletsResponse.prototype, "onev211ClicksGetResponses401ContentApplication1jsonSchema", void 0);
    return ListAllDropletsResponse;
}(utils_1.SpeakeasyBase));
exports.ListAllDropletsResponse = ListAllDropletsResponse;
