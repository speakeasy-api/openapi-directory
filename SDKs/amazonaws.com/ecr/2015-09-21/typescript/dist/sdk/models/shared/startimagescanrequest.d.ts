import { SpeakeasyBase } from "../../../internal/utils";
import { ImageIdentifier } from "./imageidentifier";
export declare class StartImageScanRequest extends SpeakeasyBase {
    /**
     * An object with identifying information for an image in an Amazon ECR repository.
     */
    imageId: ImageIdentifier;
    registryId?: string;
    repositoryName: string;
}
