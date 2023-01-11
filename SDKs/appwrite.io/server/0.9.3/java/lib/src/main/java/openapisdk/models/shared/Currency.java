package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Currency
 * Currency
**/
public class Currency {
    @JsonProperty("code")
    public String code;
    public Currency withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("decimalDigits")
    public Integer decimalDigits;
    public Currency withDecimalDigits(Integer decimalDigits) {
        this.decimalDigits = decimalDigits;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Currency withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("namePlural")
    public String namePlural;
    public Currency withNamePlural(String namePlural) {
        this.namePlural = namePlural;
        return this;
    }
    @JsonProperty("rounding")
    public Float rounding;
    public Currency withRounding(Float rounding) {
        this.rounding = rounding;
        return this;
    }
    @JsonProperty("symbol")
    public String symbol;
    public Currency withSymbol(String symbol) {
        this.symbol = symbol;
        return this;
    }
    @JsonProperty("symbolNative")
    public String symbolNative;
    public Currency withSymbolNative(String symbolNative) {
        this.symbolNative = symbolNative;
        return this;
    }
}