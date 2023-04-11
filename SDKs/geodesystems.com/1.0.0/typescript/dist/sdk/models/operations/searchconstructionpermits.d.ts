import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchConstructionPermitsRequest extends SpeakeasyBase {
    /**
     * Archive change date from
     */
    changedateFrom?: Date;
    /**
     * Archive change date to
     */
    changedateTo?: Date;
    /**
     * Archive create date from
     */
    createdateFrom?: Date;
    /**
     * Archive create date to
     */
    createdateTo?: Date;
    /**
     * Search description
     */
    description?: string;
    /**
     * File suffix
     */
    filesuffix?: string;
    /**
     * From date
     */
    fromdate?: Date;
    /**
     * Parent entry
     */
    group?: string;
    /**
     * Max number of results
     */
    max?: number;
    /**
     * Northern bounds of search
     */
    maxlatitude?: number;
    /**
     * Eastern bounds of search
     */
    maxlongitude?: number;
    /**
     * Southern bounds of search
     */
    minlatitude?: number;
    /**
     * Western bounds of search
     */
    minlongitude?: number;
    /**
     * Search name
     */
    name?: string;
    /**
     * Address
     */
    searchDbConstructionPermitsAddress?: string;
    /**
     * Affordable Hsg Unit
     */
    searchDbConstructionPermitsAffordableHsgUnit?: number;
    /**
     * Applied
     */
    searchDbConstructionPermitsApplied?: string;
    /**
     * Approved
     */
    searchDbConstructionPermitsApproved?: string;
    /**
     * Building Uses And Work Scopes
     */
    searchDbConstructionPermitsBuildingUsesAndWorkScopes?: string;
    /**
     * Case Status
     */
    searchDbConstructionPermitsCaseStatus?: string;
    /**
     * Category
     */
    searchDbConstructionPermitsCategory?: string;
    /**
     * Co Date
     */
    searchDbConstructionPermitsCoDate?: string;
    /**
     * Completion Date
     */
    searchDbConstructionPermitsCompletionDate?: string;
    /**
     * Contractor Company
     */
    searchDbConstructionPermitsContractorCompany?: string;
    /**
     * Contractor First Name
     */
    searchDbConstructionPermitsContractorFirstName?: string;
    /**
     * Contractor Last Name
     */
    searchDbConstructionPermitsContractorLastName?: string;
    /**
     * Existing Res Unit
     */
    searchDbConstructionPermitsExistingResUnit?: number;
    /**
     * Issued
     */
    searchDbConstructionPermitsIssued?: string;
    /**
     * Narrative Description
     */
    searchDbConstructionPermitsNarrativeDescription?: string;
    /**
     * New Res Unit
     */
    searchDbConstructionPermitsNewResUnit?: number;
    /**
     * New Sf
     */
    searchDbConstructionPermitsNewSf?: number;
    /**
     * Owner1 Company
     */
    searchDbConstructionPermitsOwner1Company?: string;
    /**
     * Owner1 First Name
     */
    searchDbConstructionPermitsOwner1FirstName?: string;
    /**
     * Owner1 Last Name
     */
    searchDbConstructionPermitsOwner1LastName?: string;
    /**
     * Owner2 Company
     */
    searchDbConstructionPermitsOwner2Company?: string;
    /**
     * Owner2 First Name
     */
    searchDbConstructionPermitsOwner2FirstName?: string;
    /**
     * Owner2 Last Name
     */
    searchDbConstructionPermitsOwner2LastName?: string;
    /**
     * Permit Types
     */
    searchDbConstructionPermitsPermitTypes?: string;
    /**
     * Primary Company
     */
    searchDbConstructionPermitsPrimaryCompany?: string;
    /**
     * Primary First Name
     */
    searchDbConstructionPermitsPrimaryFirstName?: string;
    /**
     * Primary Last Name
     */
    searchDbConstructionPermitsPrimaryLastName?: string;
    /**
     * Remodel Sf
     */
    searchDbConstructionPermitsRemodelSf?: number;
    /**
     * Total Project Value
     */
    searchDbConstructionPermitsTotalProjectValue?: number;
    /**
     * Total Subpermit Value
     */
    searchDbConstructionPermitsTotalSubpermitValue?: number;
    /**
     * Number to skip
     */
    skip?: number;
    /**
     * Search text
     */
    text?: string;
    /**
     * To date
     */
    todate?: Date;
}
export declare class SearchConstructionPermitsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
