import { SpeakeasyBase } from "../../../internal/utils";
import { LinksCreateContractLink } from "./linkscreatecontractlink";
import { LinksGetContractsLink } from "./linksgetcontractslink";
export declare class CreateContractResponseLinks extends SpeakeasyBase {
    contracts?: LinksGetContractsLink;
    self?: LinksCreateContractLink;
}
