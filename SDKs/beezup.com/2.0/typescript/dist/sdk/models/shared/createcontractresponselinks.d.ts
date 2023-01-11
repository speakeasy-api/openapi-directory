import { SpeakeasyBase } from "../../../internal/utils";
import { LinksGetContractsLink } from "./linksgetcontractslink";
import { LinksCreateContractLink } from "./linkscreatecontractlink";
export declare class CreateContractResponseLinks extends SpeakeasyBase {
    contracts?: LinksGetContractsLink;
    self?: LinksCreateContractLink;
}
