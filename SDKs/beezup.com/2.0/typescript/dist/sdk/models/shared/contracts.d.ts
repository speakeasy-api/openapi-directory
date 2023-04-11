import { SpeakeasyBase } from "../../../internal/utils";
import { ContractsLinks } from "./contractslinks";
import { CurrentContractInfo } from "./currentcontractinfo";
import { NextContractInfo } from "./nextcontractinfo";
/**
 * Contract list
 */
export declare class Contracts extends SpeakeasyBase {
    current?: CurrentContractInfo;
    links: ContractsLinks;
    next?: NextContractInfo;
}
