import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdContractualRelationshipRequest extends SpeakeasyBase {
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdContractualRelationshipResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A contractual relationship folder
     */
    contractualRelationship?: shared.ContractualRelationship;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
