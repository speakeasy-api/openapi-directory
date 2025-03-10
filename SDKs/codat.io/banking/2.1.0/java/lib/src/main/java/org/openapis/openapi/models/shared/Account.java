/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Account - This data type provides a list of all the SMB's bank accounts, with rich data like balances, account numbers, and institutions holding the accounts.
 * 
 * Explore our [data coverage](https://knowledge.codat.io/supported-features/banking?view=tab-by-data-type&amp;dataType=banking-accounts).
 * 
 * Responses are paged, so you should provide `page` and `pageSize` query parameters in your request.
 */
public class Account {
    /**
     * Depending on the data provided by the underlying bank, not all balances are always available.
     */
    @JsonProperty("balance")
    public AccountBalanceAmounts balance;

    public Account withBalance(AccountBalanceAmounts balance) {
        this.balance = balance;
        return this;
    }
    
    /**
     * The currency code for the account.
     */
    @JsonProperty("currency")
    public String currency;

    public Account withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    
    /**
     * The name of the person or company who holds the account.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("holder")
    public String holder;

    public Account withHolder(String holder) {
        this.holder = holder;
        return this;
    }
    
    /**
     * The ID of the account from the provider.
     */
    @JsonProperty("id")
    public String id;

    public Account withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * An object containing bank account identification information.
     */
    @JsonProperty("identifiers")
    public AccountIdentifiers identifiers;

    public Account withIdentifiers(AccountIdentifiers identifiers) {
        this.identifiers = identifiers;
        return this;
    }
    
    /**
     * The friendly name of the account, chosen by the holder. This may not have been set by the account holder and therefore is not always available.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("informalName")
    public String informalName;

    public Account withInformalName(String informalName) {
        this.informalName = informalName;
        return this;
    }
    
    /**
     * The bank or other financial institution providing the account.
     */
    @JsonProperty("institution")
    public AccountInstitution institution;

    public Account withInstitution(AccountInstitution institution) {
        this.institution = institution;
        return this;
    }
    
    /**
     * In Codat's data model, dates and times are represented using the &lt;a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank"&gt;ISO 8601 standard&lt;/a&gt;. Date and time fields are formatted as strings; for example:
     * 
     * ```
     * 2020-10-08T22:40:50Z
     * 2021-01-01T00:00:00
     * ```
     * 
     * 
     * 
     * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
     * 
     * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
     * - Unqualified local time: `2021-11-15T01:00:00`
     * - UTC time offsets: `2021-11-15T01:00:00-05:00`
     * 
     * &gt; Time zones
     * &gt; 
     * &gt; Not all dates from Codat will contain information about time zones.  
     * &gt; Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modifiedDate")
    public String modifiedDate;

    public Account withModifiedDate(String modifiedDate) {
        this.modifiedDate = modifiedDate;
        return this;
    }
    
    /**
     * The name of the account according to the provider.
     */
    @JsonProperty("name")
    public String name;

    public Account withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * In Codat's data model, dates and times are represented using the &lt;a class="external" href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank"&gt;ISO 8601 standard&lt;/a&gt;. Date and time fields are formatted as strings; for example:
     * 
     * ```
     * 2020-10-08T22:40:50Z
     * 2021-01-01T00:00:00
     * ```
     * 
     * 
     * 
     * When syncing data that contains `DateTime` fields from Codat, make sure you support the following cases when reading time information:
     * 
     * - Coordinated Universal Time (UTC): `2021-11-15T06:00:00Z`
     * - Unqualified local time: `2021-11-15T01:00:00`
     * - UTC time offsets: `2021-11-15T01:00:00-05:00`
     * 
     * &gt; Time zones
     * &gt; 
     * &gt; Not all dates from Codat will contain information about time zones.  
     * &gt; Where it is not available from the underlying platform, Codat will return these as times local to the business whose data has been synced.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceModifiedDate")
    public String sourceModifiedDate;

    public Account withSourceModifiedDate(String sourceModifiedDate) {
        this.sourceModifiedDate = sourceModifiedDate;
        return this;
    }
    
    /**
     * The type of transactions and balances on the account.  
     * For Credit accounts, positive balances are liabilities, and positive transactions **reduce** liabilities.  
     * For Debit accounts, positive balances are assets, and positive transactions **increase** assets.
     */
    @JsonProperty("type")
    public AccountTypeEnum type;

    public Account withType(AccountTypeEnum type) {
        this.type = type;
        return this;
    }
    
    public Account(@JsonProperty("balance") AccountBalanceAmounts balance, @JsonProperty("currency") String currency, @JsonProperty("id") String id, @JsonProperty("identifiers") AccountIdentifiers identifiers, @JsonProperty("institution") AccountInstitution institution, @JsonProperty("name") String name, @JsonProperty("type") AccountTypeEnum type) {
        this.balance = balance;
        this.currency = currency;
        this.id = id;
        this.identifiers = identifiers;
        this.institution = institution;
        this.name = name;
        this.type = type;
  }
}
