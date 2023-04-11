import { SpeakeasyBase } from "../../../internal/utils";
export declare class PackageVersionPackageVersionMetadataContainerMetadata extends SpeakeasyBase {
    tags: string[];
}
export declare class PackageVersionPackageVersionMetadataDockerMetadata extends SpeakeasyBase {
    tag?: string[];
}
export declare enum PackageVersionPackageVersionMetadataPackageTypeEnum {
    Npm = "npm",
    Maven = "maven",
    Rubygems = "rubygems",
    Docker = "docker",
    Nuget = "nuget",
    Container = "container"
}
export declare class PackageVersionPackageVersionMetadata extends SpeakeasyBase {
    container?: PackageVersionPackageVersionMetadataContainerMetadata;
    docker?: PackageVersionPackageVersionMetadataDockerMetadata;
    packageType: PackageVersionPackageVersionMetadataPackageTypeEnum;
}
/**
 * A version of a software package
 */
export declare class PackageVersion extends SpeakeasyBase {
    createdAt: Date;
    deletedAt?: Date;
    description?: string;
    htmlUrl?: string;
    /**
     * Unique identifier of the package version.
     */
    id: number;
    license?: string;
    metadata?: PackageVersionPackageVersionMetadata;
    /**
     * The name of the package version.
     */
    name: string;
    packageHtmlUrl: string;
    updatedAt: Date;
    url: string;
}
