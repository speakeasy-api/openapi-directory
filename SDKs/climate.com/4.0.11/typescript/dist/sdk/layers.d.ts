import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * General data retrieval endpoints.
 */
export declare class Layers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve a list of application activities
     *
     * @remarks
     * Retrieve a list of application activities. The id in the response is used for  GET /v4/layers/asApplied/{activityId}/contents.
     */
    getV4LayersAsApplied(req: operations.GetV4LayersAsAppliedRequest, security: operations.GetV4LayersAsAppliedSecurity, config?: AxiosRequestConfig): Promise<operations.GetV4LayersAsAppliedResponse>;
    /**
     * Retrieve the raw application activity
     *
     * @remarks
     * Retrieve an individual application activity by id.  Ids are retrieved via the  /layers/asApplied route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`). The data is compressed using .zip format.
     */
    getV4LayersAsAppliedActivityIdContents(req: operations.GetV4LayersAsAppliedActivityIdContentsRequest, security: operations.GetV4LayersAsAppliedActivityIdContentsSecurity, config?: AxiosRequestConfig): Promise<operations.GetV4LayersAsAppliedActivityIdContentsResponse>;
    /**
     * Retrieve a list of harvest activities
     *
     * @remarks
     * Retrieve a list of harvest activities. The id in the response is used for  GET /v4/layers/asHarvested/{activityId}/contents.
     */
    getV4LayersAsHarvested(req: operations.GetV4LayersAsHarvestedRequest, security: operations.GetV4LayersAsHarvestedSecurity, config?: AxiosRequestConfig): Promise<operations.GetV4LayersAsHarvestedResponse>;
    /**
     * Retrieve the raw harvest activity
     *
     * @remarks
     * Retrieve an individual harvest activity by id.  Ids are retrieved via the  /layers/asHarvested route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`). The data is compressed using .zip format.
     */
    getV4LayersAsHarvestedActivityIdContents(req: operations.GetV4LayersAsHarvestedActivityIdContentsRequest, security: operations.GetV4LayersAsHarvestedActivityIdContentsSecurity, config?: AxiosRequestConfig): Promise<operations.GetV4LayersAsHarvestedActivityIdContentsResponse>;
    /**
     * Retrieve a list of planting activities
     *
     * @remarks
     * Retrieve a list of planting activities. The id in the response is used for  GET /v4/layers/asPlanted/{activityId}/contents.
     */
    getV4LayersAsPlanted(req: operations.GetV4LayersAsPlantedRequest, security: operations.GetV4LayersAsPlantedSecurity, config?: AxiosRequestConfig): Promise<operations.GetV4LayersAsPlantedResponse>;
    /**
     * Retrieve the raw planting activity
     *
     * @remarks
     * Retrieve an individual planting activity by id.  Ids are retrieved via the  /layers/asPlanted route. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB`  (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`).  The data is compressed using .zip format.
     */
    getV4LayersAsPlantedActivityIdContents(req: operations.GetV4LayersAsPlantedActivityIdContentsRequest, security: operations.GetV4LayersAsPlantedActivityIdContentsSecurity, config?: AxiosRequestConfig): Promise<operations.GetV4LayersAsPlantedActivityIdContentsResponse>;
    /**
     * Retrieve a list of scouting observations
     *
     * @remarks
     * Retrieve a list of scouting observations created or updated by the user identified by the Authorization header.
     */
    getV4LayersScoutingObservations(req: operations.GetV4LayersScoutingObservationsRequest, security: operations.GetV4LayersScoutingObservationsSecurity, config?: AxiosRequestConfig): Promise<operations.GetV4LayersScoutingObservationsResponse>;
    /**
     * Retrieve individual scouting observation
     *
     * @remarks
     * Retrieve an individual scouting observation by id.  Ids are retrieved via the /layers/scoutingObservations route.
     */
    getV4LayersScoutingObservationsScoutingObservationId(req: operations.GetV4LayersScoutingObservationsScoutingObservationIdRequest, security: operations.GetV4LayersScoutingObservationsScoutingObservationIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetV4LayersScoutingObservationsScoutingObservationIdResponse>;
    /**
     * Retrieve attachments associated with a given scouting observation.
     *
     * @remarks
     * Retrieve attachments associated with a given scouting observation. Photos added to scouting notes in the FieldView app are capped to 20MB, and we won’t store photos larger than that in a scouting note.
     */
    getV4LayersScoutingObservationsScoutingObservationIdAttachments(req: operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsRequest, security: operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsSecurity, config?: AxiosRequestConfig): Promise<operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsResponse>;
    /**
     * Retrieve the binary contents of a scouting observation’s attachment.
     *
     * @remarks
     * Photos added to scouting notes in the FieldView app are capped to `20MiB` (`20971520 bytes`), and we won’t store photos larger than that in a scouting note. Downloads larger than `5MiB` (`5242880 bytes`) in size, must be downloaded in chunks no larger than `5MiB` (`5242880 bytes`) and no smaller than `1MiB` (`1048576 bytes`). The last chunk could be less than `1MiB` (`1048576 bytes`).
     */
    getV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContents(req: operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsRequest, security: operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsSecurity, config?: AxiosRequestConfig): Promise<operations.GetV4LayersScoutingObservationsScoutingObservationIdAttachmentsAttachmentIdContentsResponse>;
}
