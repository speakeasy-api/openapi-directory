package openapisdk.models.operations;


public enum ReposUpdateInformationAboutPagesSiteRequestBodySourceEnum {
    GH_PAGES("gh-pages"),
    MASTER("master"),
    MASTER_DOCS("master /docs");

    public final String value;

    private ReposUpdateInformationAboutPagesSiteRequestBodySourceEnum(String value) {
        this.value = value;
    }
}
