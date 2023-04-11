import { SpeakeasyBase } from "../../../internal/utils";
import { LinksDisableChannelCatalogProductLink } from "./linksdisablechannelcatalogproductlink";
import { LinksGetChannelCatalogProductInfoLink } from "./linksgetchannelcatalogproductinfolink";
import { LinksOverrideChannelCatalogProductValuesLink } from "./linksoverridechannelcatalogproductvalueslink";
import { LinksReenableChannelCatalogProductLink } from "./linksreenablechannelcatalogproductlink";
/**
 * Indicates the differents actions you can do on a channel product
 */
export declare class ChannelCatalogProductInfoLinks extends SpeakeasyBase {
    disable?: LinksDisableChannelCatalogProductLink;
    override: LinksOverrideChannelCatalogProductValuesLink;
    reenable?: LinksReenableChannelCatalogProductLink;
    self: LinksGetChannelCatalogProductInfoLink;
}
