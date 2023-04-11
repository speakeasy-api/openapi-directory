import { SpeakeasyBase } from "../../../internal/utils";
import { NullableMinimalRepository } from "./nullableminimalrepository";
import { NullableSimpleUser } from "./nullablesimpleuser";
export declare enum PackagePackageTypeEnum {
    Npm = "npm",
    Maven = "maven",
    Rubygems = "rubygems",
    Docker = "docker",
    Nuget = "nuget",
    Container = "container"
}
export declare enum PackageVisibilityEnum1 {
    Private = "private",
    Public = "public"
}
/**
 * A software package
 */
export declare class Package extends SpeakeasyBase {
    createdAt: Date;
    htmlUrl: string;
    /**
     * Unique identifier of the package.
     */
    id: number;
    /**
     * The name of the package.
     */
    name: string;
    /**
     * A GitHub user.
     */
    owner?: NullableSimpleUser;
    packageType: PackagePackageTypeEnum;
    /**
     * Minimal Repository
     */
    repository?: NullableMinimalRepository;
    updatedAt: Date;
    url: string;
    /**
     * The number of versions of the package.
     */
    versionCount: number;
    visibility: PackageVisibilityEnum1;
}
