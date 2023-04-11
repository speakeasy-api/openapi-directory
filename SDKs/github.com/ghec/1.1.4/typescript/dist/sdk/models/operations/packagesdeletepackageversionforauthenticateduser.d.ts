import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PackagesDeletePackageVersionForAuthenticatedUserRequest extends SpeakeasyBase {
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
}
export declare class PackagesDeletePackageVersionForAuthenticatedUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Requires authentication
     */
    basicError?: shared.BasicError;
}
