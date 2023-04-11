import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningArtifactView } from "./provisioningartifactview";
/**
 * Success
 */
export declare class ListProvisioningArtifactsForServiceActionOutput extends SpeakeasyBase {
    nextPageToken?: string;
    provisioningArtifactViews?: ProvisioningArtifactView[];
}
