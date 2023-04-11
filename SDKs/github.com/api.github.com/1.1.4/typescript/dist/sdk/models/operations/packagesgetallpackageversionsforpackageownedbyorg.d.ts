import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The state of the package, either active or deleted.
 */
export declare enum PackagesGetAllPackageVersionsForPackageOwnedByOrgStateEnum {
    Active = "active",
    Deleted = "deleted"
}
export declare class PackagesGetAllPackageVersionsForPackageOwnedByOrgRequest extends SpeakeasyBase {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The name of the package.
     */
    packageName: string;
    /**
     * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
     */
    packageType: shared.PackageTypeEnum;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * The state of the package, either active or deleted.
     */
    state?: PackagesGetAllPackageVersionsForPackageOwnedByOrgStateEnum;
}
export declare class PackagesGetAllPackageVersionsForPackageOwnedByOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    packageVersions?: shared.PackageVersion[];
}
