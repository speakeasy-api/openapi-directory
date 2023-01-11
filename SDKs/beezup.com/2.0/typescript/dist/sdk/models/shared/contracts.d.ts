import { SpeakeasyBase } from "../../../internal/utils";
import { CurrentContractInfo } from "./currentcontractinfo";
import { ContractsLinks } from "./contractslinks";
import { NextContractInfo } from "./nextcontractinfo";
export declare class Contracts extends SpeakeasyBase {
    current?: CurrentContractInfo;
    links: ContractsLinks;
    next?: NextContractInfo;
}
