import { SpeakeasyBase } from "../../../internal/utils";
import { BeezUPCommonInfoSummaries } from "./beezupcommoninfosummaries";
import { CreateContractResponseLinks } from "./createcontractresponselinks";
/**
 * New contract has been created. Some warnings can be present in response.
 */
export declare class CreateContractResponse extends SpeakeasyBase {
    info?: BeezUPCommonInfoSummaries;
    links?: CreateContractResponseLinks;
}
