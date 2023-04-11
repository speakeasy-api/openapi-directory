import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PackagesDeletePackageVersionForUserRequest extends SpeakeasyBase {
    /**
     * The name of the package.
     */
    packageName: string;
    /**
     * The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
     */
    packageType: shared.PackageTypeEnum;
    /**
     * Unique identifier of the package version.
     */
    packageVersionId: number;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
}
export declare class PackagesDeletePackageVersionForUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
}
